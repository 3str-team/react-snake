import config from "../../config";

export default class Snake {
  static move(snake, vector, eat, blocks) {
    let newSnake = [...snake];

    switch (vector) {
      case 1:
        newSnake.unshift({
          x: newSnake[0].x,
          y: (newSnake[0].y - 1 + config.h) % config.h,
        });
        break;
      case 2:
        newSnake.unshift({
          x: (newSnake[0].x + 1) % config.w,
          y: newSnake[0].y,
        });
        break;
      case 3:
        newSnake.unshift({
          x: newSnake[0].x,
          y: (newSnake[0].y + 1) % config.h,
        });
        break;
      case 4:
        newSnake.unshift({
          x: (newSnake[0].x - 1 + config.w) % config.w,
          y: newSnake[0].y,
        });
        break;
    }

    if (!(newSnake[0].x == eat.x && newSnake[0].y == eat.y)) {
      newSnake.pop();
    }

    for (let i = 1; i < newSnake.length; ++i) {
      if (newSnake[0].x == newSnake[i].x && newSnake[0].y == newSnake[i].y) {
        newSnake.length = i;
        break;
      }
    }

    for (let i = 0; i < blocks.length; ++i) {
      if (newSnake[0].x == blocks[i].x && newSnake[0].y == blocks[i].y) {
        newSnake.length = Math.max(newSnake.length - 5, 2);
        break;
      }
    }

    return newSnake;
  }
}
