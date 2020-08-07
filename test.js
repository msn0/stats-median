var assert = require('assert');
var median = require('./');

describe("Median calculation", function () {
  it("should return expected values", function () {

    var data1 = [35, 20, 15, 50, 40];
    var data2 = [3, 6, 7, 15, 16, 11, 13, 8, 8, 20];
    var data3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    assert.equal(median.calc(data1), 35);
    assert.equal(median.calc(data2), 9.5);
    assert.equal(median.calc(data3), 5);
  });

  it("test length of 0", function () {
    var data = [];
    // have to check this way because comparison with NaN always returns false
    assert.equal(isNaN(median.calc(data)), true);
    assert.throws(() => {
      median.calc(data);
    }, Error);
  });

  it("test length of 1", function () {
    var data = [42];
    assert.equal(median.calc(data), 42);
  });

  it("test length of 2", function () {
    var data = [1, 2];
    assert.equal(median.calc(data), 1.5);
  });
});
