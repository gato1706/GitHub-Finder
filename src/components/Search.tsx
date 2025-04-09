import React from "react";
import { BsSearch } from "react-icons/bs";

export const Search = () => {
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Cpmjeça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder="Digite o nome do usuário" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
