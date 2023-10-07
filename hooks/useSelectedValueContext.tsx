import { useContext } from 'react';
import { SelectedValueContext } from '../context/SelectedValueContext';

const useSelectedValueContext = () => {

    const context = useContext(SelectedValueContext);
    if(!context) {
        throw Error ("selectedValue '")
    }

  return context;
}

export default useSelectedValueContext
