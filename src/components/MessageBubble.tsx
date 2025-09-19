
interface MessageBubbleProps {
  text?: string;
  audioUrl?: string;
  isUser: boolean;
}

export function MessageBubble({ text, audioUrl, isUser }: MessageBubbleProps) {
  // Extrai nome do arquivo do audioUrl se existir
  let fileName = '';
  if (audioUrl) {
    try {
      const urlObj = new URL(audioUrl);
      fileName = urlObj.pathname.split('/').pop() || 'Áudio';
    } catch {
      fileName = 'Áudio';
    }
  }
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`mb-2 p-2 sm:p-3 md:p-4 rounded-3xl break-words whitespace-pre-line
          max-w-[90vw] sm:max-w-[70vw] md:max-w-[60%] lg:max-w-[50%]
          ${isUser ? 'bg-third text-right' : 'bg-gray-200 text-left'}`}
      >
        {(audioUrl || text) ? (
          <div className="flex flex-col gap-1">
            {audioUrl && (
              <>
                <span className="text-xs text-gray-500 mb-1">Anexo: {fileName}</span>
                <audio controls src={audioUrl} className="w-full">
                  Seu navegador não suporta áudio.
                </audio>
              </>
            )}
            {text && (
              <span>{text}</span>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
