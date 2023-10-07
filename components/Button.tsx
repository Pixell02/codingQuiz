import "./Button.css";

interface props {
    name: string
    onClick: () => void;
}

const Button = ({name, onClick}: props) => {
  return (
    <button className='rounded-button' onClick={onClick}>
        {name}
    </button>
  )
}

export default Button
