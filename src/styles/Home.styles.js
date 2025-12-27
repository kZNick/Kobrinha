import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  .logo{
    width: 30%;
  }
  button{
    padding: 5px;
  }
  .metamasck{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: transparent;
    padding: 10px;
    border: 2px solid #db5000ff;
    border-radius: 15px;
    color: white; 
    font-size: 18px;
    position: absolute;
    right: 5%;
    top: 15px;
      font-family: "Pixelify Sans", sans-serif;
  }

`;


export const PixelButton = styled.button`
  background: #2c2c2cff;
  color: white;
  font-size: 16px;
  padding: 10px 22px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Pixelify Sans", sans-serif;


  /* sem arredondamento (bem “quadrado”) */
  border-radius: 0;

  /* bordas em camadas, estilo pixel */
  box-shadow:
    0 0 0 3px #000,
    0 0 0 6px #ffffff,
    0 0 0 9px #000;

  image-rendering: pixelated;
  text-transform: uppercase;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(2px);
  }
`;