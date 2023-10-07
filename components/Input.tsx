import { ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
  value: string;
  onChange: (value: string, className: string) => void;
  className: string;
  name?:string
}

const Input = ({ value, onChange, className, name }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value, className);
  };

  return (
  <div className="input-container">
    <span className="input-title">{name}</span>
    <input type="text" value={value} className={className} onChange={handleChange} />
  </div>
  );

};

export default Input;
