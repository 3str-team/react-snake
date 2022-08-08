import React from "react";
import config from "../../config";
import "./Cell.css";

const Cell = ({ coords, type, bg }) => {
  const styles = {
    width: config.cellSize,
    height: config.cellSize,
    left: coords.x * config.cellSize,
    top: coords.y * config.cellSize,
    background: coords?.bg,
  };
  return <div className={`cell cell-${type}`} style={styles}></div>;
};

export default Cell;
