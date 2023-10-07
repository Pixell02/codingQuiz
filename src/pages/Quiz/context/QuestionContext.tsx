import { DocumentData } from "firebase/firestore";
import React, { createContext, useState } from "react";
import useCollection from "../hooks/useCollection";


interface QuestionProps {
    currentNumber: number;
    handleIncrease: () => void;
    documents: DocumentData[] | null;
}

export const QuestionContext = createContext<QuestionProps | null>(null);


interface props {
    children: React.ReactNode
}

export const QuestionProvider = ({children}: props) => {

    const [currentNumber, setCurrentNumber] = useState<number>(0);
    const { documents} = useCollection();

    const handleIncrease = () => {
        setCurrentNumber(currentNumber + 1)
    }


    return (
        <QuestionContext.Provider value={{currentNumber, handleIncrease, documents}}>
            {children}
        </QuestionContext.Provider>
    )
}