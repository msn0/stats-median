"use strict";

function comparator(n, m) {
  return n < m ? -1 : 1;
}

module.exports = {
  calc: function (data) {
    if (data.length === 0) {
      throw new Error("Cannot calculate median of empty data!");
    }
    data.sort(comparator);
    if (data.length % 2 === 0) {
      return (data[data.length / 2 - 1] + data[data.length / 2]) / 2;
    }
    return data[Math.floor(data.length / 2)];
  }
};
