import { useState } from "react";
import Button from "../../../../components/Button";
import useQuestionContext from "../hooks/useQuestionContext";
import QuestionDescription from "./QuestionDescription";

interface selectedItemProps {
  answer: string;
  isTrue: boolean;
}

const Window = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { documents, currentNumber, handleIncrease } = useQuestionContext();
  const [selectedItem, setSelectedItem] = useState<selectedItemProps | null>(null);
 

  const handleClick = (item: selectedItemProps) => {
    setSelectedItem(item);
    setIsClicked(true);
  };
  const handleSelect = () => {
    if (selectedItem?.isTrue) {
      handleIncrease();
      setSelectedItem(null)
      setIsClicked(false)
    } else {
      handleIncrease();
      setSelectedItem(null);
      setIsClicked(false);
    }
  };

  return (
    <div className="settings-window-container">
      {documents?.length && documents[currentNumber] && (
        <>
          <QuestionDescription description={documents[currentNumber].question} />
          {documents[currentNumber].answers.map((item: selectedItemProps, i: number) => (
            <Button key={i} name={item.answer} onClick={() => handleClick(item)} />
          ))}
          <Button name="Wybierz" onClick={handleSelect} blocked={!isClicked} />
        </>
      )}
    </div>
  );
};

export default Window;
