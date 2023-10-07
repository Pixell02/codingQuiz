import useQuestionContext from "../hooks/useQuestionContext";

const Counter = () => {
    const {currentNumber} = useQuestionContext();
  return (
    <div>
     <h1>{currentNumber}/10</h1> 
    </div>
  )
}

export default Counter
