import { useEffect, useState } from "react";
import busyPlaces from "../helpers/busyPlaces";
import rand from "../helpers/randomFunc";
import config from "../config";
import Enemy from "../components/Field/Enemy";

const createRandomBlocks = (count, bp) => {
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
  const setCoords = () => {
    const coords = { x: rand(0, config.w - 1), y: rand(0, config.h - 1) };
    for (let i = 0; i < bp.length; ++i) {
      if (bp[i].x == coords.x && bp[i].y == coords.y) {
        return setCoords();
      }
    }
    return coords;
  };
  let res = [];
  while (count > 0) {
    --count;
    res.push(setCoords());
  }
  return res;
};

export default function useBlocks(snake, eat, score) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    let newBlocks = createRandomBlocks(
      config.blocksCount,
      busyPlaces([snake], eat)
    );
    for (let i = 0; i < 2; ++i) {
      const wall = Enemy.createWall(busyPlaces([snake, newBlocks], eat));
      newBlocks = [...newBlocks, ...wall];
    }
    setBlocks(newBlocks);
  }, [eat]);

  useEffect(() => {}, [snake]);
  return blocks;
}
