import { useEffect, useRef, useState } from 'react';
import { SelectedValueProps } from '../context/SelectedValueContext';
import useSelectedValueContext from './useSelectedValueContext';



interface props {
    className: string;
}
export interface optionsProps {
  label: string;
  image?: string;
  value: string;
}

const useSelectRef = ({className}: props) => {

    const selectRef = useRef<HTMLDivElement | null>(null);
    const [selectedOption, setSelectedOption] = useState<optionsProps>({
      image: "",
      label: "",
      value: "",
    });
    const { setSelectedValues } = useSelectedValueContext();
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

    useEffect(() => {
      setSelectedValues((prev: SelectedValueProps) => ({
        ...prev,
        [className]: selectedOption.value
      }))
    },[selectedOption, setSelectedValues, className])


  return {selectRef, isOpen, toggleDropdown, handleOptionClick, selectedOption}
}

export default useSelectRef
