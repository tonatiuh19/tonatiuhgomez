import React, { useState, useEffect, useRef } from "react";
import useInterval from "../../../Hooks/useInterval/useInterval";
import { Apple, Velocity } from "../../../interfaces/Interfaces";
import Timer from "../../Molecules/Timer/Timer";
import {
  AiTwotoneStar,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { GrTrophy } from "react-icons/gr";
import Constants from "../../../utils/Constants";

const Snake = () => {
  const {
    canvasWidth,
    canvasHeight,
    minGameSpeed,
    canvasGridSize,
    maxGameSpeed,
  } = Constants();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameDelay, setGameDelay] = useState<number>(1000 / minGameSpeed);
  const [countDown, setCountDown] = useState<number>(4);
  const [running, setRunning] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [highscore, setHighscore] = useState(0);
  const [newHighscore, setNewHighscore] = useState(false);
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState<{
    head: { x: number; y: number };
    trail: Array<any>;
  }>({
    head: { x: 12, y: 9 },
    trail: [],
  });
  const [apple, setApple] = useState<Apple>({ x: -1, y: -1 });
  const [velocity, setVelocity] = useState<Velocity>({ dx: 0, dy: 0 });
  const [previousVelocity, setPreviousVelocity] = useState<Velocity>({
    dx: 0,
    dy: 0,
  });

  const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(-1, -1, canvasWidth + 2, canvasHeight + 2);
  };

  const generateApplePosition = (): Apple => {
    const x = Math.floor(Math.random() * (canvasWidth / canvasGridSize));
    const y = Math.floor(Math.random() * (canvasHeight / canvasGridSize));
    // Check if random position interferes with snake head or trail
    if (
      (snake.head.x === x && snake.head.y === y) ||
      snake.trail.some((snakePart) => snakePart.x === x && snakePart.y === y)
    ) {
      return generateApplePosition();
    }
    return { x, y };
  };

  const startGame = () => {
    setGameDelay(1000 / minGameSpeed);
    setIsLost(false);
    setScore(0);
    setSnake({
      head: { x: 12, y: 9 },
      trail: [],
    });
    setApple(generateApplePosition());
    setVelocity({ dx: 0, dy: -1 });
    setRunning(true);
    setNewHighscore(false);
    setCountDown(3);
  };

  const gameOver = () => {
    if (score > highscore) {
      setHighscore(score);
      localStorage.setItem("highscore", score.toString());
      setNewHighscore(true);
    }
    setIsLost(true);
    setRunning(false);
    setVelocity({ dx: 0, dy: 0 });
    setCountDown(4);
  };

  const fillRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.fillRect(x, y, w, h);
  };

  const strokeRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.strokeRect(x + 0.5, y + 0.5, w, h);
  };

  const drawSnake = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#0170F3";
    ctx.strokeStyle = "#003779";

    fillRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    );

    strokeRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    );

    snake.trail.forEach((snakePart) => {
      fillRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      );

      strokeRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      );
    });
  };

  const drawApple = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#DC3030"; // '#38C172' // '#F4CA64'
    ctx.strokeStyle = "#881A1B"; // '#187741' // '#8C6D1F

    if (
      apple &&
      typeof apple.x !== "undefined" &&
      typeof apple.y !== "undefined"
    ) {
      fillRect(
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      );

      strokeRect(
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      );
    }
  };

  const updateSnake = () => {
    // Check for collision with walls
    const nextHeadPosition = {
      x: snake.head.x + velocity.dx,
      y: snake.head.y + velocity.dy,
    };
    if (
      nextHeadPosition.x < 0 ||
      nextHeadPosition.y < 0 ||
      nextHeadPosition.x >= canvasWidth / canvasGridSize ||
      nextHeadPosition.y >= canvasHeight / canvasGridSize
    ) {
      gameOver();
    }

    // Check for collision with apple
    if (nextHeadPosition.x === apple.x && nextHeadPosition.y === apple.y) {
      setScore((prevScore) => prevScore + 1);
      setApple(generateApplePosition());
    }

    const updatedSnakeTrail = [...snake.trail, { ...snake.head }];
    // Remove trail history beyond snake trail length (score + 2)
    while (updatedSnakeTrail.length > score + 2) updatedSnakeTrail.shift();
    // Check for snake colliding with itsself
    if (
      updatedSnakeTrail.some(
        (snakePart) =>
          snakePart.x === nextHeadPosition.x &&
          snakePart.y === nextHeadPosition.y
      )
    )
      gameOver();

    // Update state
    setPreviousVelocity({ ...velocity });
    setSnake({
      head: { ...nextHeadPosition },
      trail: [...updatedSnakeTrail],
    });
  };

  useEffect(() => {
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext("2d");

    if (ctx && !isLost) {
      clearCanvas(ctx);
      drawApple(ctx);
      drawSnake(ctx);
    }
  }, [snake]);

  useInterval(
    () => {
      if (!isLost) {
        updateSnake();
      }
    },
    running && countDown === 0 ? gameDelay : null
  );

  useInterval(
    () => {
      setCountDown((prevCountDown) => prevCountDown - 1);
    },
    countDown > 0 && countDown < 4 ? 800 : null
  );

  useEffect(() => {
    setHighscore(
      localStorage.getItem("highscore")
        ? parseInt(localStorage.getItem("highscore")!)
        : 0
    );
  }, []);

  useEffect(() => {
    if (score > minGameSpeed && score <= maxGameSpeed) {
      setGameDelay(1000 / score);
    }
  }, [score]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "w",
          "a",
          "s",
          "d",
        ].includes(e.key)
      ) {
        let velocity = { dx: 0, dy: 0 };

        switch (e.key) {
          case "ArrowRight":
            velocity = { dx: 1, dy: 0 };
            break;
          case "ArrowLeft":
            velocity = { dx: -1, dy: 0 };
            break;
          case "ArrowDown":
            velocity = { dx: 0, dy: 1 };
            break;
          case "ArrowUp":
            velocity = { dx: 0, dy: -1 };
            break;
          case "d":
            velocity = { dx: 1, dy: 0 };
            break;
          case "a":
            velocity = { dx: -1, dy: 0 };
            break;
          case "s":
            velocity = { dx: 0, dy: 1 };
            break;
          case "w":
            velocity = { dx: 0, dy: -1 };
            break;
          default:
            console.error("Error with handleKeyDown");
        }
        if (
          !(
            previousVelocity.dx + velocity.dx === 0 &&
            previousVelocity.dy + velocity.dy === 0
          )
        ) {
          setVelocity(velocity);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [previousVelocity]);

  return (
    <>
      <Timer pause={false} />
      <main>
        <canvas
          ref={canvasRef}
          width={canvasWidth + 1}
          height={canvasHeight + 1}
        />
        <section>
          <div className="score">
            <p>
              <AiTwotoneStar />
              Score: {score}
            </p>
            <p>
              <GrTrophy />
              Highscore: {highscore > score ? highscore : score}
            </p>
          </div>
          {!isLost && countDown > 0 ? (
            <button onClick={startGame}>
              {countDown === 4 ? "Start Game" : countDown}
            </button>
          ) : (
            <div className="controls">
              <p>How to Play?</p>
              <p>
                <AiOutlineArrowUp />
                <AiOutlineArrowRight />
                <AiOutlineArrowDown />
                <AiOutlineArrowLeft />
              </p>
            </div>
          )}
        </section>
        {isLost && (
          <div className="game-overlay">
            <p className="large">Game Over</p>
            <p className="final-score">
              {newHighscore ? `🎉 New Highscore 🎉` : `You scored: ${score}`}
            </p>
            {!running && isLost && (
              <button onClick={startGame}>
                {countDown === 4 ? "Restart Game" : countDown}
              </button>
            )}
          </div>
        )}
      </main>
      <footer>
        Copyright &copy; <a href="https://mueller.dev">Marc Müller</a> 2022
        &nbsp;|&nbsp;{" "}
      </footer>
    </>
  );
};

export default Snake;
