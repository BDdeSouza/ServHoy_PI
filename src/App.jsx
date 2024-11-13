import { useEffect, useRef, useState } from "react";
import { S } from "./App-styles";
import Card from "./components/Card/Card";
import { categorias, data } from "./constants/Data";
import Categoria from "./components/Categoria/Categorias";

export default function App() {
  const pesquisa = useRef(null);
  const [dataFiltered, setDataFiltered] = useState(data);
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);

  useEffect(() => {
    if(categoriasSelecionadas.length > 0){
      const filtered = data
        .filter(d => categoriasSelecionadas.some(c => d.categoria.includes(c)));
      setDataFiltered(filtered);
    } else {
      setDataFiltered(data);
    }
  },[categoriasSelecionadas]);
  

  function filter(dado, pesquisa) {
    return [dado.nome, dado.descricao, dado.email, dado.telefone].some((d) =>
      String(d).toUpperCase().includes(String(pesquisa).toUpperCase())
    );
  }

  function onChangePesquisa(e) {
    if (e?.target?.value) {
      const filtered = data.filter((d) => filter(d, e.target.value));
      setDataFiltered(filtered);
    } else {
      setDataFiltered(data);
    }
  }

  function clickCategoria(categoria, selecionada){
    if(selecionada){
      setCategoriasSelecionadas([...categoriasSelecionadas, categoria]);
    } else {
      setCategoriasSelecionadas(prev => prev.filter(c => c != categoria));
    }
  }

  return (
    <S.Screen>
      <S.Header>
        <S.HeaderTop>
          <S.TextoHeader $fontsize={"28px"}>
            Encontre o serviço ideal para sua necessidade
          </S.TextoHeader>
          <S.TextoHeader $fontsize={"18px"}>
            Entre em contato com o prestador para negociar e agendar o serviço!
          </S.TextoHeader>
        </S.HeaderTop>
        <S.InputBusca
          onChange={onChangePesquisa}
          ref={pesquisa}
          placeholder="Pesquise por um serviço"
        />
        <br />
        <S.Categorias>
          {categorias.map((c) => (
            <Categoria 
              key={c} 
              categoria={c} 
              click={clickCategoria}            
            />
          ))}
        </S.Categorias>
      </S.Header>
      <S.Body>
        {dataFiltered.map((d) => (
          <Card
            key={d.nome}
            nome={d.nome}
            descricao={d.descricao}
            email={d.email}
            telefone={d.telefone}
            imagem={d.imagem}
            categoria={d.categoria}
          />
        ))}
      </S.Body>
      <div className="elfsight-app-2ce829ed-ceaa-4034-b955-6bbfeb1575f8" data-elfsight-app-lazy></div>
    </S.Screen>
  );
}
