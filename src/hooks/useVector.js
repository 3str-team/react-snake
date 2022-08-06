import { useEffect, useState } from "react";

export default function useVector() {
  const [vector, setVector] = useState(2); // right

  const changeVector = (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (vector !== 3) setVector(1);
        break;
      case "ArrowRight":
        if (vector !== 4) setVector(2);
        break;
      case "ArrowDown":
        if (vector !== 1) setVector(3);
        break;
      case "ArrowLeft":
        if (vector !== 2) setVector(4);
        break;
    }
    // console.log(vector);
  };

  useEffect(() => {
    window.addEventListener("keydown", changeVector);
    return () => {
      window.removeEventListener("keydown", changeVector);
    };
  }, [vector]);

  return vector;
}
