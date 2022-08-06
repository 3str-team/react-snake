import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useCells from "../../hooks/useCells";
import config from "../../config";
import "./Field.css";
import Controller from "./Controller";
import useVector from "../../hooks/useVector";
import useEat from "../../hooks/useEat";
import useDelay from "../../hooks/useDelay";
import Score from "../Score/Score";
import useScore from "../../hooks/useScore";

const startLength = (length) =>  {
  let list = [];
  for(let i = 0; i < length; ++i) {
    list.unshift(
      {x: i, y: 0}
    )
  }
  return list;
}

const Field = ({ width, height }) => {
  const [snake, setSnake] = useState(startLength(4));
  
  const eat = useEat(snake);
  const delay = useDelay(eat);
  const cells = useCells(snake, eat);
  const score = useScore(snake);
  
  const vector = useVector();

  useEffect(() => {
    let t = setInterval(() => {
        setSnake(Controller.move(snake, vector, eat));
    }, delay);
    return () => {
        clearInterval(t);
    }
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
