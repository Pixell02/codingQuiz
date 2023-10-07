import React, { createContext, useState } from "react";

export interface SelectedValueProps {
  language: string;
  level: string;
}

export const SelectedValueContext = createContext<
  | {
      selectedValues: SelectedValueProps;
      setSelectedValues: React.Dispatch<React.SetStateAction<SelectedValueProps>>;
    }
  | undefined
>(undefined);

interface props {
    children: React.ReactNode
}

export const SelectedValueProvider = ({ children }: props) => {
  const [selectedValues, setSelectedValues] = useState<SelectedValueProps>({
    language: "",
    level: "",
  });

  return <SelectedValueContext.Provider value={{ selectedValues, setSelectedValues }}>{children}</SelectedValueContext.Provider>;
};
