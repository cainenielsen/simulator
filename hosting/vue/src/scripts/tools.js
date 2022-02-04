function toCurrency(input) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(input).replace(".00", "");
}

function selectRandom(input) {
  const randomElement = input[Math.floor(Math.random() * input.length)];
  return randomElement;
}

function randomNumberBetween(min, max) {
  let random = (Math.random() * (max - min) + min).toFixed(2);;
  if (min.between(0, 1) || max.between(0, 1)) {
    return random;
  } else {
    return random = Math.floor(random);
  }
}

function idGenerator() {
  this.length = 8;
  this.timestamp = +new Date();

  const _getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.generate = function () {
    const ts = this.timestamp.toString();
    const parts = ts.split("").reverse();
    let id = "";

    for (let i = 0; i < this.length; ++i) {
      const index = _getRandomInt(0, parts.length - 1);
      id += parts[index];
    }

    return parseInt(id);
  };
}

export { toCurrency, selectRandom, idGenerator, randomNumberBetween };
