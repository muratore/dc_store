import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (evt) => {
    console.log(evt.target.value);
    setSearch(evt.target.value);
  };
  return (
    <div className="flex flex-1 relative">
      <form className="flex flex-1 ">
        <input
          className={`
            flex
            flex-1
            py-3
            px-4
            ml-12
            text-black
            bg-zinc-100 rounded-md
            `}
          type="search"
          name=""
          id=""
          value={search}
          placeholder="Pesquisar Produto"
          onChange={handleSearch}
        
        />
        <button className="absolute right-3 top-[25%] bg-inherit"><IconSearch/></button>
      </form>
    </div>
  );
};

export default SearchInput;
