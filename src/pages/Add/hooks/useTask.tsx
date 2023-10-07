import { useEffect, useState } from "react";
import useSelectedValueContext from "../../../../hooks/useSelectedValueContext";
interface answerProps {
  answer: string;
  isTrue: boolean;
}

interface taskProps {
  language: string;
  level: string;
  question: string;
  answers: answerProps[];
}

const useTask = () => {
  const { selectedValues } = useSelectedValueContext();
  const [isActive, setIsActive] = useState(false)
  const [task, setTask] = useState<taskProps>({
    language: selectedValues.language,
    level: selectedValues.level,
    question: "",
    answers: [
      { answer: "", isTrue: true },
      { answer: "", isTrue: false },
      { answer: "", isTrue: false },
      { answer: "", isTrue: false },
    ],
  });

  useEffect(() => {
  const find = task.answers.find((item) => item.answer === "")
  if(!find) {
    setIsActive(true)
  } else {
    setIsActive(false)
  }
  }, [task]);

  const handleClickInput = (value: string, className: string) => {
    setTask((prev) => ({
      ...prev,
      [className]: value,
    }));
  };

  const handleChangeAnswer = (value: string, i: number) => {
    const newAnswers = [...task.answers];
    newAnswers[i].answer = value;
    setTask((prev) => ({
      ...prev,
      answers: newAnswers,
    }));
  };

  return { task, handleClickInput, handleChangeAnswer, isActive };
};

export default useTask;
