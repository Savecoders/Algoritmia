//search the max value position (k)
const input = [4, 2, 9, 7, 5, 6, 7, 1, 3];
const k = 4;
const inputOrder = input.sort((a, b) => b - a);
//!complete
console.log(inputOrder.at(k - 1));
