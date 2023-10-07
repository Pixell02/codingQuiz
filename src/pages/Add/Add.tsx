import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { db } from "../../../firebase/config";
import useTask from "./hooks/useTask";
const Add = () => {

  const navigate = useNavigate();
  const { task, handleClickInput, handleChangeAnswer, isActive } = useTask();

  const handleAddClick = () => {
    const docRef = collection(db, "questions");
    addDoc(docRef, task)
    navigate("/");
  };
  console.log(task)
  return (
    <div className="settings-window-container">
      <div className="w-75">
        <Input value={task.question} name="Pytanie" className="question" onChange={handleClickInput} />

        {task.answers.map((answer, i) => (
          <div key={i}>
            <Input
              value={answer.answer}
              name={`Odpowiedź ${i === 0 ? "dobra" : "zła"}`}
              className={`answer-${i}`}
              onChange={(value) => handleChangeAnswer(value, i)}
            />
          </div>
        ))}
        <Button name="Dodaj" onClick={handleAddClick} blocked={!isActive} />
      </div>
    </div>
  );
};

export default Add;
