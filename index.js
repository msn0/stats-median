"use strict";

function comparator(n, m) {
  return n < m ? -1 : 1;
}

module.exports = {
  calc: function (data) {
    var copy = data.slice();
    copy.sort(comparator);
    if (copy.length % 2 === 0) {
      return (copy[copy.length / 2 - 1] + copy[copy.length / 2]) / 2;
    }
    return copy[Math.floor(copy.length / 2)];
  }
};
