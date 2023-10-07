import Counter from "./components/Counter";
import Window from "./components/Window";
import { QuestionProvider } from "./context/QuestionContext";

const Quiz = () => {
  return (
    <QuestionProvider>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <Counter />
      <Window />
      </div>
    </QuestionProvider>
  )
};

export default Quiz;
