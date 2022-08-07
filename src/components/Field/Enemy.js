import config from "../../config";
import rand from "../../helpers/randomFunc";

export default class Enemy {
  static create(type, snake, eat, enemyList) {
    let enemy = {};
    let busyPlaces = [];
    snake.map((cell) => {
      busyPlaces.push(cell);
    });
    enemyList.map((enemy) => {
      enemy.pieces.map((piece) => {
        busyPlaces.push(piece);
      });
    });
    busyPlaces.push(eat);
    switch (type) {
      case "wall":
    }
  }

  static checkCorrectPosition(busyPlaces, abstraction) {
    for (let i = 0; i < abstraction.length; ++i) {
      for (let j = 0; j < busyPlaces.length; ++j) {
        if (
          abstraction[i].x == busyPlaces[j].x &&
          abstractio[i].y == busyPlaces[j].y
        ) {
          return false;
        }
      }
    }
    return abstraction;
  }

  static createWall(busyPlaces) {
    const wallAbstraction = (position) => {
      let abstraction = [];
      let coord;
      switch (position) {
        case 1:
          coord = {
            x: rand(1, config.w - 2),
            y: 0,
          };
          abstraction.push({ x: coord.x - 1, y: coord.y });
          abstraction.push({ x: coord.x, y: coord.y });
          abstraction.push({ x: coord.x + 1, y: coord.y });
          for (let i = 3; i < config.h; ++i) {
            abstraction.push({ x: coord.x, y: i });
          }
          break;
        case 2:
          coord = {
            x: config.w - 1,
            y: rand(1, config.h - 2),
          };
          abstraction.push({ x: coord.x, y: coord.y - 1 });
          abstraction.push({ x: coord.x, y: coord.y });
          abstraction.push({ x: coord.x, y: coord.y + 1 });
          for (let i = 0; i < config.w - 3; ++i) {
            abstraction.push({ x: i, y: coord.y });
          }
          break;
        case 3:
          coord = {
              x: rand(1, config.w - 2),
              y: config.h - 1,
          };
          abstraction.push({ x: coord.x + 1, y: coord.y });
          abstraction.push({ x: coord.x, y: coord.y });
          abstraction.push({ x: coord.x - 1, y: coord.y });
          for (let i = 0; i < config.h - 3; ++i) {
            abstraction.push({ x: coord.x, y: i });
          }
          break;
        case 4:
            coord = {
                x: 0,
                y: rand(1, config.h - 2),
            };
          abstraction.push({ x: coord.x, y: coord.y + 1 });
          abstraction.push({ x: coord.x, y: coord.y });
          abstraction.push({ x: coord.x, y: coord.y - 1 });
          for (let i = 3; i < config.h; ++i) {
            abstraction.push({ x: i, y: coord.y });
          }
          break;
      }

      if(!Enemy.checkCorrectPosition(busyPlaces, abstraction)) {
        return wallAbstraction(position);
      }
      return abstraction;
    };

    const position = rand(1, 4);
    return
  }
}
