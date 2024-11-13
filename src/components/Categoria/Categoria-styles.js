import { styled } from "styled-components";

export const S = {
  Tag: styled.span`
    width: 300px;
    background-color: #343237;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${(props) => props.$cor};
    user-select: none;
  `,
};
