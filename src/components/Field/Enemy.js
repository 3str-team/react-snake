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
          abstraction[i].y == busyPlaces[j].y
        ) {
          return false;
        }
      }
    }
    return true;
  }

  static setSaveRadius(snakeHead) {
    let res = [];
    for (let i = 1; i <= config.saveRadius; ++i) {
      res.push({
        x: snakeHead.x + i,
        y: snakeHead.y,
      });
      res.push({
        x: snakeHead.x,
        y: snakeHead.y + i,
      });
      res.push({
        x: snakeHead.x - i,
        y: snakeHead.y,
      });
      res.push({
        x: snakeHead.x,
        y: snakeHead.y - i,
      });
    }
    return res;
  }

  static createWall(busyPlaces) {
    const findFreePlace = (attempt) => {
      if (attempt > 10) {
        return [];
      }
      const coords = {
        x: rand(1, config.w - 2),
        y: 0,
      };
      let abstraction = [];

      for (let i = -2; i <= 2; ++i) {
        abstraction.push({
          x: coords.x + i,
          y: coords.y,
          bg: "#8EB1C7",
        });
      }

      for (let i = 3; i < config.h; ++i) {
        abstraction.push({
          x: coords.x,
          y: i,
          bg: "red",
          customDamage: 4,
        });
      }
      abstraction = [...abstraction, ...Enemy.setSaveRadius(abstraction[0])];
      for (let i = 1; i <= 2; ++i) {
        for (let j = -2; j <= 2 ; ++j) {
          abstraction.push({
            x: coords.x + j,
            y: coords.y + i,
          });
        }
      }

      if (Enemy.checkCorrectPosition(busyPlaces, abstraction)) {
        for (let i = 0; i < config.saveRadius * 4 + 10; ++i) {
          abstraction.pop();
        }
        return abstraction;
      } else {
        return findFreePlace(attempt + 1);
      }
    };

    const position = 1;
    return findFreePlace(1);
  }
}
