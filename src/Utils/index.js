export const operators = {
  addition: {
    symbol: "+",
    name: "addition",
    resolve: (a, b) => Number(a) + Number(b)
  },
  substraction: {
    symbol: "-",
    name: "substraction",
    resolve: (a, b) => Number(a) - Number(b)
  },
  multiplication: {
    symbol: "*",
    name: "multiplication",
    resolve: (a, b) => Number(a) * Number(b)
  },
  division: {
    symbol: "/",
    name: "division",
    resolve: (a, b) => Number(a) / Number(b)
  },
  equal: {
    symbol: "=",
    name: "equal"
  },
  cleanAll: {
    symbol: "AC",
    name: "cleanAll"
  },
  rotate: {
    symbol: "<-",
    name: "rotate"
  },
  del: {
    symbol: "DEL",
    name: "del"
  }
};

export const rotateLeft = (arr, qty) => {
  const baseArr = arr.slice(qty);
  const moveArr = arr.slice(0, qty);
  const finalArr = [...baseArr, ...moveArr];
  return finalArr;
};
