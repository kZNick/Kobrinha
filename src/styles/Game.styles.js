import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  .gameOver{
    position: absolute;
    top: 45%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-items: center;
    gap: 5px;
    button{
      background-color: transparent;
      border: 2px solid white;
      padding: 8px;
      border-radius: 5px;
      color: white;
      transition: 0.5s;
      cursor: pointer;
      
    }
    button:hover{
      background-color: rgba(15, 15, 15, 0.71);
    }
  }
  gap: 10px;
    .Logo{
    width: 120px;
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

export const GameOver = styled.h2`
  color: red;
  margin-top: 20px;
  font-size: 30px;
`;

export const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  min-width: 200px;
  margin-bottom: 15px;
  background: #222;
  color: #fff;
  border-radius: 8px;
  font-size: 18px;
  /* text-align: center; */
  div{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content:space-between;
    /* flex-direction: column; */
    /* background-color: azure; */
    gap: 5px;
    p{
      display: flex;
      width: 100%;
      display: flex;

      width: 200px;
    }
    span{
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
`;
