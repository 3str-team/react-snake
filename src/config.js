const width = window.innerWidth;
const height = window.innerHeight;
const cellSize = 15;
const w = Math.floor(width / cellSize);
const h = Math.floor(height / cellSize);
const minDelay = 70;
const maxDelay = 80;
const startLength = 4;
const saveRadius = 5;
const fine = 2;
const blocksCount = Math.floor(0.005 * w * h); // 10% площади будут составлять блоки

const config = {
  cellSize,
  w,
  h,
  width,
  height,
  minDelay,
  maxDelay,
  startLength,
  saveRadius,
  fine,
  blocksCount,
};

export default config;
