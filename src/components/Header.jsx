import Carrinho from "./templates/Carrinho"
import Logo from "./templates/Logo"
import MainBotao from "./templates/MainBotao"
import Menu from "./templates/Menu"
import SearchInput from "./templates/SearchInput"

const Header = () => {
  return (
    <div className="text-digital-cinza container">
      <div className="flex items-center mb-8">
      <Logo title='Digital Store' subtitle='Algo' className="text-[36px] font-semibold"/>
      <SearchInput/>
      <MainBotao texto='Cadastre' color className=' underline underline-offset-1 mx-12 text-digital-cinza'/>
      <MainBotao fundo texto='Entrar'/>
      <MainBotao fundo texto='teste'/>
      <Carrinho/>
      </div>
      <Menu/>
    </div>
  )
}

export default Header