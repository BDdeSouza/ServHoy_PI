import { styled } from "styled-components";

export const S = {
  Card: styled.div`
    position: relative;
    width: 300px;
    height: 700px;
    background-color: #343237;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `,
  Button: styled.button`
    position: absolute;
    background-color: #2AB318;
    border: none;
    width: 94%;
    height: 60px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    bottom: 10px;
  `,
  Titulo: styled.span`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    height: 60px;
  `,
  Texto14: styled.span`
    font-size: 14px;
    font-weight: bold;
  `,
  Texto12: styled.span`
    font-size: 12px;
    font-weight: bold;
  `,
  Imagem: styled.img`
    max-width: 98%;
    max-height: 350px;
    border-radius: 4px;
  `,
  IconWpp: styled.img`
    max-width: 40px;
    max-height: 40px;
  `,
  DadosContato: styled.div`
    width: 100%;
    align-items: center;
  `,
  LinkAgenda: styled.a`
    position: absolute;
    bottom: 90px;
  `
};
