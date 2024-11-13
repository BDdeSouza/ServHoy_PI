import { useEffect, useState } from "react";
import { S } from "./Categoria-styles";

export default function Categoria({categoria, click}){

  const [selecionada, setSelecionada] = useState(false);
  
  function clickSelect(){
    setSelecionada(prev => !prev);
  }

  useEffect(() => {
    if(click){
      click(categoria, selecionada);
    }
  },[selecionada]);
  

  return(
    <S.Tag
      onClick={clickSelect}
      $cor={selecionada ? "#B8952E" : "#343237"}
    >
      {categoria}
    </S.Tag>
  );
 }
