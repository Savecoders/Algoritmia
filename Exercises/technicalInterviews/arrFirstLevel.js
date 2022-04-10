const flatten = (arr) => arr.reduce((acc, cur) => acc.concat(cur), []);
const result = flatten([[11, 2], [[3, 4]], [1, []]]);
console.log(result);
