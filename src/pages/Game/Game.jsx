import SnakeBoard from "../../components/SnakeBoard/SnakeBoard";
import { useSnakeGame } from "../../hooks/useSnakeGame";
import { Container, GameOver, ScoreBox } from "../../styles/Game.styles";
import lgoCobrinha from "../../assets/img/kobrinhaLogo.png"
import { useContext } from "react";
import { Web3Context } from "../../context/Web3Context";
import Fox3D from "../../components/foxLook";
import HOME from "../../assets/img/home.png"
import { useNavigate } from "react-router-dom";
 
export const Game = () => {
  const { snake, food, gameOver, boardSize, resetGame, score, highScore } =
    useSnakeGame();

  const { account, connect } = useContext(Web3Context);
  const navigate = useNavigate();

  return (
    <Container>
      {/* <h1>Snake</h1> */}
      <img src={lgoCobrinha} alt=""  className="Logo"/>
      <SnakeBoard snake={snake} food={food} boardSize={boardSize} />

    <button onClick={connect} className="metamasck">
    <Fox3D/>
     {account ? `Connected: ${account.slice(0,6)}...${account.slice(-4)}` : "Connect MetaMask"}
    </button>
    <button className="home" onClick={()=>navigate("/")}>
      <img src={HOME} alt="" />
    </button>

<div className="gameOver">
      {gameOver && (
        <>
          <GameOver>GAME OVER</GameOver>
          <button onClick={resetGame}>Restart</button>
        </>
      )}
</div>
      <ScoreBox>
        <div>
          <p>🎯 Score:</p>
          <span>{score}</span>
        </div>
        <div>
          {/* <span>🏆 Recorde:</span> */}
          <p>🏆 Record:</p>
          <span>
            {highScore} 
          </span>
        </div>
      </ScoreBox>
    </Container>
  );
};
