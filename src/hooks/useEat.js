import { useEffect, useState } from "react";
import config from "../config";
import rand from "../helpers/randomFunc";

const randomPlace = (snake) => {
  let newEat = { x: rand(0, config.w - 1), y: rand(0, config.h - 1) };
  for (let i = 0; i < snake.length; ++i) {
    if (newEat == snake[i]) {
      return randomPlace(snake);
    }
  }
  return newEat;
};

export default function useEat(snake) {
  const [eat, setEat] = useState(randomPlace(snake));
  useEffect(() => {
    if (eat.x == snake[0].x && snake[0].y == eat.y) {
      setEat(randomPlace(snake));
    }
    // console.log(eat);
  }, [snake]);
  return eat;
}
