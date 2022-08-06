import { useState, useEffect } from "react";
import Cell from "../components/Cell/Cell";

const useCells = (snake, eat) => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    // console.log(snake);
    let list = [];
    for (let i = 0; i < snake.length; ++i) {
      list.push(
        <Cell key={`${i}_${Date.now()}`} coords={snake[i]} type="snake" />
      )
    }
    list.push(
      <Cell key={`${snake.length + 1}_${Date.now()}`} coords={eat} type="eat" />
    )
    setCells(list);
  }, [snake]);

  return cells;
};

export default useCells;
