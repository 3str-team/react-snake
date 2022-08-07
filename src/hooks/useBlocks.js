import { useEffect, useState } from "react";
import busyPlaces from "../helpers/busyPlaces";
import rand from "../helpers/randomFunc";
import config from "../config";

const createBlocks = (count, bp) => {
  for (let i = 1; i <= config.saveRadius; ++i) {
    bp.push({
      x: bp[0].x + i,
      y: bp[0].y,
    });
    bp.push({
      x: bp[0].x,
      y: bp[0].y + i,
    });
    bp.push({
      x: bp[0].x - i,
      y: bp[0].y,
    });
    bp.push({
      x: bp[0].x,
      y: bp[0].y - i,
    });
  }
  const check = (coords) => {
    for (let i = 0; i < bp.length; ++i) {
      if (bp[i].x == coords.x && bp[i].y == coords.y) {
        return false;
      }
    }
    return true;
  };
  let res = [];
  while (count > 0) {
    const coords = { x: rand(0, config.w - 1), y: rand(0, config.h - 1) };
    if (check(coords)) {
      --count;
      res.push(coords);
    }
  }
  return res;
};

export default function useBlocks(snake, eat, score) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks(createBlocks(score, busyPlaces(snake, eat)));
  }, [eat]);
  return blocks;
}
