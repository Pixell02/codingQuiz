import useSelectRef from "../hooks/useSelectRef";
import "./Select.css";

export interface optionsProps {
  label: string;
  image?: string;
  value: string;
}

interface props {
  options: optionsProps[];
  name: string;
  className: string;
}

const Select = ({ options, className, name}: props) => {
  
  const { selectRef, toggleDropdown, handleOptionClick, isOpen, selectedOption } = useSelectRef({ className });

  return (
    <div className="custom-select">
      <span className="custom-select-name">{name}</span>
      <div className="select-box" ref={selectRef} onClick={toggleDropdown}>
        <div className="selected-option">
          {selectedOption.image && <img src={selectedOption.image} alt={selectedOption.label} />}
          {selectedOption ? <span className="option-label">{selectedOption.label}</span> : "Wybierz opcję"}
        </div>
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
          {options.map((option) => (
            <div key={option.value} className="option" onClick={() => handleOptionClick(option)}>
             {option.image ? <img src={option.image} alt={option.label} /> : <div></div>}
              <span className="option-label">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
