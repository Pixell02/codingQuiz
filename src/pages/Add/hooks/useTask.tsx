import { useState } from 'react';

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
const [task, setTask] = useState<taskProps>({
  language: "",
  level: "",
  question: "",
  answers: [
    { answer: "", isTrue: true },
    { answer: "", isTrue: false },
    { answer: "", isTrue: false },
    { answer: "", isTrue: false },
  ],
});

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

  return {task, handleClickInput, handleChangeAnswer};
}

export default useTask
