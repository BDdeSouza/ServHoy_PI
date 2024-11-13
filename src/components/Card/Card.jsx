import { S } from "./Card-styles";
import { images } from "../../constants/Data";
import imgWpp from "../../images/wpp.png";

export default function Card({
  nome,
  descricao,
  email,
  telefone,
  imagem,
  categoria,
}) {
  function formataTelefone() {
    return String(telefone).replace(/[()-\s]/g, "");
  }

  function openWpp() {
    const numero = formataTelefone();
    window.open(`https://wa.me/+55${numero}/?text=Olá!`);
  }

  return (
    <S.Card>
      <S.Titulo>{nome}</S.Titulo>
      <S.Imagem src={images[imagem]} alt="imagem-servco" />
      <S.DadosContato>
        <S.Texto14>{descricao}</S.Texto14>
      </S.DadosContato>
      <S.DadosContato>
        <S.Texto14>{`Categoria: ${categoria}`}</S.Texto14>
      </S.DadosContato>
      <br />
      <S.DadosContato>
        <S.Texto12>{`Email: ${email}`}</S.Texto12>
        <br />
        <S.Texto12>{`Telefone: ${telefone}`}</S.Texto12>
      </S.DadosContato>
      <S.Button onClick={openWpp}>
        Entrar em contato
        <S.IconWpp src={imgWpp} alt="icon-wpp" />
      </S.Button>
      <br />
      <S.LinkAgenda
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1jjfFjLeM9g8U6guexManVkkLLJ81ZP0D_k5zAH2cKYCU64qSnLHO1pO7jiAMb5-8L6bmQbObt"
        target="_blank"
        >
        <span>Horários disponíveis</span>
      </S.LinkAgenda>
    </S.Card>
  );
}
