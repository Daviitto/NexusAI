type TextareaProps = React.ComponentProps<"textarea"> &{
    rows?: number,
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    className?: string;
}


export function Textarea({rows, placeholder, value, onChange, onInput, onKeyDown, className} : TextareaProps) {
    return ( 

 <textarea 
 
 placeholder={placeholder} 
    rows={rows}
    style={{ minHeight: '3.5rem', height: '3.5rem' }}
    onInput={onInput}

    onKeyDown={onKeyDown}

    value={value}
    onChange={onChange}
    className={`outline-none resize-none overflow-hidden font-sans border-gray-300 rounded-3xl p-4 pr-12 shadow-lg ${className}`}
  />


    )
}