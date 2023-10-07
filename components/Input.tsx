import { ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
  value: string;
  onChange: (value: string, className: string) => void;
  className: string;
}

const Input = ({ value, onChange, className }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value, className);
  };

  return <input type="text" value={value} className={className} onChange={handleChange} />;
};

export default Input;
