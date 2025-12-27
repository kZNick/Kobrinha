import { Board, Pixel } from "../../styles/SnakeBoard.styles";

export default function SnakeBoard({ snake, food, boardSize }) {
  return (
    <Board size={boardSize}>
      {Array.from({ length: boardSize }).map((_, y) =>
        Array.from({ length: boardSize }).map((_, x) => {
          const isHead = snake[0][0] === x && snake[0][1] === y;

          const isBody = snake.some(
            ([sx, sy], index) => index !== 0 && sx === x && sy === y
          );

          const isFood = food[0] === x && food[1] === y;

          return (
            <Pixel
              kPixeley={`${x}-${y}`}
              head={isHead}
              body={isBody}
              food={isFood}
            />
          );
        })
      )}
    </Board>
  );
}
