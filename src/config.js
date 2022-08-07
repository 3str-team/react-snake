const width = window.innerWidth;
const height = window.innerHeight;
const cellSize = 15;
const w = Math.floor(width / cellSize);
const h = Math.floor(height / cellSize);
const minDelay = 50;
const maxDelay = 80;
const startLength = 4;
const saveRadius = 2;

const config = {
  cellSize,
  w,
  h,
  width,
  height,
  minDelay,
  maxDelay,
  startLength,
  saveRadius
};

export default config;
