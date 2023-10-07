import "./Button.css";

interface props {
    name: string
    onClick: () => void;
    blocked?: boolean;
}

const Button = ({name, onClick, blocked}: props) => {
  return (
    <button className='rounded-button' onClick={onClick} disabled={blocked} >
        {name}
    </button>
  )
}

export default Button
