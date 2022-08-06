import { useEffect, useState } from "react";
import config from "../config";

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function useDelay(eat) {
  const [delay, setDelay] = useState(rand(config.minDelay, config.maxDelay));

  useEffect(() => {
    setDelay(rand(config.minDelay, config.maxDelay));
  }, [eat]);

  return delay;
}
