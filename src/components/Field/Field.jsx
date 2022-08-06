import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useCells from "../../hooks/useCells";
import config from "../../config";
import "./Field.css";
import { useContext } from "react";
import GameContext from "../../context";
import Controller from "./Controller";
import useVector from "../../hooks/useVector";
import useEat from "../../hooks/useEat";

const Field = ({ width, height }) => {
  const [snake, setSnake] = useState([
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ]);
  
  let eat = useEat(snake);
  const vector = useVector();

  const cells = useCells(snake, eat);

  useEffect(() => {
    let t = setInterval(() => {
        setSnake(Controller.move(snake, vector, eat));
    }, 70);
    return () => {
        clearInterval(t);
    }
  }, [snake]);

  return (
    <div className="field" style={{ width, height }}>
      {cells.map((cell) => {
        return cell;
      })}
    </div>
  );
};

export default Field;
