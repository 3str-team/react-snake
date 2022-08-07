import { useEffect, useState } from "react";
import config from "../config";
import rand from "../helpers/randomFunc";
export default function useDelay(eat) {
  const [delay, setDelay] = useState(rand(config.minDelay, config.maxDelay));

  useEffect(() => {
    setDelay(rand(config.minDelay, config.maxDelay));
  }, [eat]);

  return delay;
}
