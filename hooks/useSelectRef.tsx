import { useEffect, useRef, useState } from 'react';
import { optionsProps } from '../components/Select';



interface props {
    setSelectedOption: (value: optionsProps) => void;
}

const useSelectRef = ({setSelectedOption}: props) => {

    const selectRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleOutsideClick = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: optionsProps) => {
      setSelectedOption(option);
      setIsOpen(false);
    };

    useEffect(() => {
      window.addEventListener("mousedown", handleOutsideClick);
      return () => {
        window.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);


  return {selectRef, isOpen, toggleDropdown, handleOptionClick}
}

export default useSelectRef
