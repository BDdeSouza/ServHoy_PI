import { styled } from "styled-components";

export const S = {
  Screen: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #19181b;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `,
  Header: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  `,
  Body: styled.div`
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
  `,
  InputBusca: styled.input`
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 6px;
    outline: none;
    padding-left: 20px;
    font-size: 18px;
    background-color: #252525;
  `,
  Categorias: styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
  `,
  HeaderTop: styled.div`
    width: 100%;
    height: 150px;
    background-color: #B8952E;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  `,
  TextoHeader: styled.span`
    font-size: ${(props) => props.$fontsize};
    font-weight: bold;
  `
};
