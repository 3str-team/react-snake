const busyPlaces = (arrays, eat, options = {}) => {
  let res = [];
  for (let i = 0; i < arrays.length; ++i) {
    for (let j = 0; j < arrays[i].length; ++j) {
      res.push(arrays[i][j]);
    }
  }
  res.push(eat);
  return res;
};

export default busyPlaces;
