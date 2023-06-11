
const MainBotao = (props) => {
  return (
    <div>
        <button
        className={`
        ${props.color ? 'text-black' : 'text-white'}
        ${props.fundo ? 'bg-digital-pink' : 'bg-inherit'}
        ${props.className ?? ''}
        py-2 px-4 rounded-md
        
        `}
        >{props.texto}</button>
    </div>
  )
}

export default MainBotao