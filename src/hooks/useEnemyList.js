import { useEffect, useState } from "react";
import rand from "../helpers/randomFunc";

export default function useEnemyList(snake, eat) {
  const [enemyList, setEnemyList] = useState([]);
  useEffect(() => {
    if (rand(1, 10) <= 4) {
      // 40% chance
    }
  }, [eat]);
  return enemyList;
}
