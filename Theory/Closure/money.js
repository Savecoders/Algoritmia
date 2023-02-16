function money() {
  let coins = 0;
  return (boxMoney = 0) => coins + boxMoney;
}

console.log(money()(20)); // 30
