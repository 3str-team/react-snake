import config from "../../config";

export default class Controller {
  static move(snake, vector, eat) {

    let newSnake = [...snake];

    switch (vector) {
      case 1:
        newSnake.unshift({ x: newSnake[0].x, y: (newSnake[0].y - 1 + config.h) % config.h });
        break;
      case 2:
        newSnake.unshift({ x: (newSnake[0].x + 1) % config.w, y: newSnake[0].y });
        break;
      case 3:
        newSnake.unshift({ x: newSnake[0].x, y: (newSnake[0].y + 1) % config.h });
        break;
      case 4:
        newSnake.unshift({ x: (newSnake[0].x - 1 + config.w) % config.w, y: newSnake[0].y });
        break;
    }

    if (!(newSnake[0].x == eat.x && newSnake[0].y == eat.y)) {
      newSnake.pop();
    }

    return newSnake;
  }


}
