
interface props {
    description: string;
}

const QuestionDescription = ({description}: props) => {
  return (
    <div>
      {description}
    </div>
  )
}

export default QuestionDescription
