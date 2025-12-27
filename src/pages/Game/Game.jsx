import SnakeBoard from "../../components/SnakeBoard/SnakeBoard";
import { useSnakeGame } from "../../hooks/useSnakeGame";
import { Container, GameOver, ScoreBox } from "../../styles/Game.styles";
import lgoCobrinha from "../../assets/img/kobrinhaLogo.png"
 
export const Game = () => {
  const { snake, food, gameOver, boardSize, resetGame, score, highScore } =
    useSnakeGame();

  return (
    <Container>
      {/* <h1>Snake</h1> */}
      <img src={lgoCobrinha} alt=""  className="Logo"/>
      <SnakeBoard snake={snake} food={food} boardSize={boardSize} />

<div className="gameOver">
      {gameOver && (
        <>
          <GameOver>GAME OVER</GameOver>
          <button onClick={resetGame}>Reiniciar</button>
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
