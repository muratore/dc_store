import logotipo from '../../assets/images/Logotipo/Logotipo.svg'


const Logo = (props) => {
    console.log(props);
  return (
    <div className=' flex items-center gap-2'>
        <img src={logotipo} alt="Logo" /> 
        <span className={`
          text-digital-pink
        ${props.className ?? ""}
        `}  >{props.title} </span> 
    </div>
  )
}

export default Logo