import { IconShoppingCart } from "@tabler/icons-react";
import { useState } from "react";

const Carrinho = () => {
  const [qtd, ] = useState(2);
  return (
    <div className="flex w-8 h-7 relative items-end ml-16">
      <IconShoppingCart className=" text-digital-pink" />
      <div
        className={` 
            flex items-center justify-center
            w-4 h-4 rounded-full
             text-xs  text-white
            bg-digital-pink 
            absolute right-0 top-0
        `}
      >
        {" "}
        {qtd}
      </div>
    </div>
  );
};

export default Carrinho;
