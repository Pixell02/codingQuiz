import React, { createContext, useState } from "react";


interface QuestionProps {
    currentNumber: number;
    handleIncrease: () => void;
}

export const QuestionContext = createContext<QuestionProps | null>(null);



interface props {
    children: React.ReactNode
}

export const QuestionProvider = ({children}: props) => {

    const [currentNumber, setCurrentNumber] = useState<number>(0);

    const handleIncrease = () => {
        setCurrentNumber(currentNumber + 1)
    }


    return (
        <QuestionContext.Provider value={{currentNumber, handleIncrease}}>
            {children}
        </QuestionContext.Provider>
    )
}