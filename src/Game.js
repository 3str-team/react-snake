export default class Game {
  static createShema(width, height) {
    let res = [];
    for (let i = 0; i < height; ++i) {
      res[i] = [];
      for (let j = 0; j < width; ++j) {
        res[i].push(0);
      }
    }
    res[0][0] = 1; // snake
    res[0][1] = 1; // snake
    res[0][2] = 1; // snake
    res[0][3] = 2; // head

    res[5][9] = 3; // eat
    return res;
  }
}
