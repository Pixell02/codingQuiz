import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

interface answerProps {
  answer: string;
  isTrue: boolean
}
interface taskProps {
  language: string;
  level: string;
  question: string;
  answers: answerProps[]
}

const Add = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState<taskProps>({
    language: "",
    level: "",
    question: "",
    answers: []
  })
  const handleAddClick = () => {
    navigate("/");
  };
  const handleClickInput = (value: string, className: string) => {
    setTask((prev) => ({
      ...prev,
      [className]: value
    }))
  }

  return (
    <div className="settings-window-container">
      <div className="w-75">
        <Input value={task.question} className="question" onChange={handleClickInput} />
        <Button name="Dodaj" onClick={handleAddClick} />
      </div>
    </div>
  );
};

export default Add;
