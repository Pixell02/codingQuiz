import "./Button.css"

interface props {
    name: string
}

const Button = ({name}: props) => {
  return (
    <button className='rounded-button'>
        {name}
    </button>
  )
}

export default Button
