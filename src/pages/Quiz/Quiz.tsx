import Couter from "./components/Couter";
import { QuestionProvider } from "./context/QuestionContext";

const Quiz = () => {
  return (
    <QuestionProvider>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <Couter />
      <div className="settings-window-container"></div>
      </div>
    </QuestionProvider>
  )
};

export default Quiz;
