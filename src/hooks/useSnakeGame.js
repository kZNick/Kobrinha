import { useState, useEffect } from "react";

export const useSnakeGame = () => {
  const BOARD_SIZE = 25;

  const [snake, setSnake] = useState([
    [10, 10],
    [9, 10],
    [8, 10]
  ]);

  const [direction, setDirection] = useState([1, 0]);

  const [food, setFood] = useState([
    Math.floor(Math.random() * BOARD_SIZE),
    Math.floor(Math.random() * BOARD_SIZE),
  ]);

  const [gameOver, setGameOver] = useState(false);

  // Score
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("snake_highscore")) || 0
  );

  // Movimento da cobra
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((old) => {
        const newSnake = [...old];
        const head = [...newSnake[0]];

        head[0] += direction[0];
        head[1] += direction[1];

        // Wrap nas bordas
        head[0] = (head[0] + BOARD_SIZE) % BOARD_SIZE;
        head[1] = (head[1] + BOARD_SIZE) % BOARD_SIZE;

        // Colisão com o corpo
        if (newSnake.some(([x, y]) => x === head[0] && y === head[1])) {
          setGameOver(true);
          return old;
        }

        newSnake.unshift(head);

        // Comeu comida
        if (head[0] === food[0] && head[1] === food[1]) {
          const newScore = score + 10;
          setScore(newScore);

          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem("snake_highscore", newScore);
          }

          setFood([
            Math.floor(Math.random() * BOARD_SIZE),
            Math.floor(Math.random() * BOARD_SIZE),
          ]);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [direction, food, gameOver, score, highScore]);

  // Teclado (com preventDefault)
useEffect(() => {
  const handleKey = (e) => {
    if (
      ["w", "a", "s", "d", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
        e.key
      )
    ) {
      e.preventDefault();
    }

    const [dx, dy] = direction;

    // CIMA
    if ((e.key === "w" || e.key === "ArrowUp") && dy !== 1) {
      setDirection([0, -1]);
    }

    // BAIXO
    if ((e.key === "s" || e.key === "ArrowDown") && dy !== -1) {
      setDirection([0, 1]);
    }

    // ESQUERDA
    if ((e.key === "a" || e.key === "ArrowLeft") && dx !== 1) {
      setDirection([-1, 0]);
    }

    // DIREITA
    if ((e.key === "d" || e.key === "ArrowRight") && dx !== -1) {
      setDirection([1, 0]);
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [direction]);

  const resetGame = () => {
    setSnake([
      [10, 10],
      [9, 10],
      [8, 10]
    ]);

    setDirection([1, 0]);
    setFood([
      Math.floor(Math.random() * BOARD_SIZE),
      Math.floor(Math.random() * BOARD_SIZE),
    ]);
    setScore(0);
    setGameOver(false);
  };

  return {
    snake,
    food,
    gameOver,
    boardSize: BOARD_SIZE,
    resetGame,
    score,
    highScore,
  };
};
