function toCurrency(input) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(input);
}

function selectRandom(input) {
  const randomElement = input[Math.floor(Math.random() * input.length)];
  return randomElement;
}

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function idGenerator() {
  this.length = 8;
  this.timestamp = +new Date();

  var _getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.generate = function () {
    var ts = this.timestamp.toString();
    var parts = ts.split("").reverse();
    var id = "";

    for (var i = 0; i < this.length; ++i) {
      var index = _getRandomInt(0, parts.length - 1);
      id += parts[index];
    }

    return id;
  };
}

export { toCurrency, selectRandom, idGenerator, randomNumberBetween };
