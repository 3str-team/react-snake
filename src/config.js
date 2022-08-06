const width = window.innerWidth;
const height = window.innerHeight;
const cellSize = 15;
const w = Math.floor(width / cellSize);
const h = Math.floor(height / cellSize);
const minDelay = 30;
const maxDelay = 80;

const config = {
  cellSize,
  w,
  h,
  width,
  height,
  minDelay,
  maxDelay,
};

export default config;
