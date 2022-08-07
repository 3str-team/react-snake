import { useEffect, useState } from "react";
import config from "../config";

export default function useScore(snake) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(snake.length);
  }, [snake]);

  return score;
}
