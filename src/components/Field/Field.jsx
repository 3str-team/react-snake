import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useCells from "../../hooks/useCells";
import config from "../../config";
import "./Field.css";
import Snake from "./Snake";
import useVector from "../../hooks/useVector";
import useEat from "../../hooks/useEat";
import useDelay from "../../hooks/useDelay";
import Score from "../Score/Score";
import useScore from "../../hooks/useScore";
import useEnemyList from "../../hooks/useEnemyList";
import useBlocks from "../../hooks/useBlocks";

const startLength = (length) => {
  let list = [];
  for (let i = 0; i < length; ++i) {
    list.unshift({ x: i, y: 0 });
  }
  return list;
};

const Field = ({ width, height }) => {
  const [snake, setSnake] = useState(startLength(config.startLength));
  const eat = useEat(snake);
  // const enemyList = useEnemyList(snake, eat)
  const score = useScore(snake);
  const blocks = useBlocks(snake, eat, score);
  const delay = useDelay(eat);
  const cells = useCells(snake, eat, blocks);

  const vector = useVector();

  useEffect(() => {
    let t = setInterval(() => {
      setSnake(Snake.move(snake, vector, eat, blocks));
    }, delay);
    return () => {
      clearInterval(t);
    };
  }, [snake]);

  return (
    <div className="field" style={{ width, height }}>
      <Score score={score} />
      {cells.map((cell) => {
        return cell;
      })}
    </div>
  );
};

export default Field;
