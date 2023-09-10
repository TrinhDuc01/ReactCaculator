
import '../../css/Button.css'
const Button = (props) => {
    const { key, size, bcolor, color } = props.element
    const handleButton = props.handleButton


    return (
        <button className='buttonCaculator' onClick={()=>handleButton(key)} style={{ background: bcolor, color: color, width: size }}>
            {key}
        </button>
    )
}

export default Button