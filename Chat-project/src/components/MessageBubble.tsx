
export function MessageBubble({ text, isUser }: { text: string; isUser: boolean }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`mb-2 p-2 sm:p-3 md:p-4 rounded-3xl break-words whitespace-pre-line
          max-w-[90vw] sm:max-w-[70vw] md:max-w-[60%] lg:max-w-[50%]
          ${isUser ? 'bg-third text-right' : 'bg-gray-200 text-left'}`}
      >
        {text}
      </div>
    </div>
  );
}
