import { S } from "./Card-styles";

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
console.log(imagem)
  return (
    <S.Card>
      <S.Titulo>{nome}</S.Titulo>
      <S.Imagem src={`https://servhoy.s3.sa-east-1.amazonaws.com/fotos/${imagem + 1}.png`} alt="imagem-servco" />
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
        <S.IconWpp src="https://servhoy.s3.sa-east-1.amazonaws.com/fotos/wpp.png" alt="icon-wpp" />
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
