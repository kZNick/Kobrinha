import styled from "styled-components";

// export const Board = styled.div`
//   display: grid;
//   grid-template-columns: repeat(${(p) => p.size}, 20px);
//   grid-template-rows: repeat(${(p) => p.size}, 20px);
//   gap: 1.5px;
//   background: #111;
//   padding: 10px;
//     border: none;
//   outline: none;
// `;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.size}, 20px);
  grid-template-rows: repeat(${(p) => p.size}, 20px);
  gap: 0;                // remove divisões
  background: #111;
  padding: 10px;
  border: none;
  outline: none;
`;

export const Pixel = styled.div`
  width: 20px;
  height: 20px;
  background: ${(p) =>
    p.head
      ? "#00ff00"      // cabeçaw
      : p.body
      ? "#009900"      // corpo
      : p.food
      ? "#f5f5f5ff"          // comida
      : "#222"};       // vazio

border :${(p) => ( p.food &&"1px solid #27c2ffff")};
  border-radius: ${(p) => (p.head ? " 4px" : p.food ? "50%" : "2px")};
`;


