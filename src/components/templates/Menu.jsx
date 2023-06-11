
import MenuItem from "./MenuItem"

const Menu = () => {
  return (
    <div>
        <div className="flex gap-8">
        <MenuItem page='Home'/> 
        <MenuItem page='Produtos'/> 
        <MenuItem page='Categorias'/> 
        <MenuItem page='Meus Pedidos'/> 
        </div>
    </div>
  )
}

export default Menu