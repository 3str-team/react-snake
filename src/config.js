const width = window.innerWidth;
const height = window.innerHeight;
const cellSize = 15;
const w = Math.floor(width / cellSize);
const h = Math.floor(height / cellSize);


const config = {
  cellSize,
  w,
  h,
  width,
  height,
};

export default config;
