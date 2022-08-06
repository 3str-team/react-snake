import { useEffect, useState } from "react";
import Game from "../Game";
import useCells from "./useCells";

const useGame = (config) => {
  let game = new Game({
    width: config.w,
    height: config.h,
  });
  const [shema, setShema] = useState(game.shema);
  let cells = useCells(shema, config.cellSize)
  useEffect(() => {
    setShema(game.init())
    setTimeout(() => {
      game.shema[2][2] = 2;
      setShema(game.shema);
    }, 2000);
  }, []);
  return cells;
};

export default useGame;
