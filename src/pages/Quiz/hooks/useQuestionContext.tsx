import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

const useQuestionContext = () => {

    const context = useContext(QuestionContext);
    if(!context) {
        throw Error ("Question Context'")
    }
  return context
}

export default useQuestionContext
