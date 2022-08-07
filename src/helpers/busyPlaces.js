const busyPlaces = (eat, snake = [], blocks = []) => {
  let res = [];
  for (let i = 0; i < snake.length; ++i) {
    res.push(snake[i]);
  }
  for (let i = 0; i < blocks.length; ++i) {
    res.push(blocks[i]);
  }
  res.push(eat);
  return res;
};

export default busyPlaces;
