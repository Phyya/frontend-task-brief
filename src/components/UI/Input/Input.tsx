interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input = ({ type = "text", placeholder, value, onChange, className }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full border-2 border-tertiary rounded-md p-2 outline-none transition-all duration-300  focus:border-tertiary focus:ring-1 focus:ring-primary focus:shadow-xl ${className}`}
        />
    );
};

export default Input;
