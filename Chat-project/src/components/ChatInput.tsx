import { FaArrowUp } from "react-icons/fa6";
import { Textarea } from "../components/textarea";

interface ChatInputProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit: () => void;
}

export function ChatInput({ value, onChange, onSubmit }: ChatInputProps) {
	return (
		<div className="relative w-full">
			<Textarea
				placeholder="Pergunte alguma coisa"
				rows={1}
				style={{ minHeight: '3.5rem', height: '3.5rem' }}
				className="w-full bg-gray-100"
				onInput={e => {
					const textarea = e.currentTarget;
					textarea.style.height = "auto";
					textarea.style.height = textarea.value ? textarea.scrollHeight + "px" : "3.5rem";
				}}
				onKeyDown={e => {
					if (e.key === 'Enter' && !e.shiftKey) {
						e.preventDefault();
						onSubmit();
					}
				}}
				value={value}
				onChange={onChange}
			/>
			<button className="cursor-pointer" onClick={onSubmit}>
				<FaArrowUp size={22} className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black p-1 h-7 w-7 rounded-full text-white" />
			</button>
		</div>
	);
}
