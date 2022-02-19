//!resolve: given an integer n, generate all the valid combinations
//*of n pairs of parentheses

const generateCombinationP = (num) => {
	//tree of solve
	let combinations = [];
	const solveCombinations = (num, difference, comb, combinations) => {
		console.log(num);
		if (difference < 0 || difference > num) {
			console.log('stop');
			return;
		} else if (num === 0) {
			if (difference === 0) {
				combinations.push(comb.join(''));
			}
		} else {
			comb.push('(');
			solveCombinations(num - 1, difference + 1, comb, combinations);
			comb.pop();
			comb.push(')');
			solveCombinations(num - 1, difference - 1, comb, combinations);
			comb.pop();
		}
	};
	solveCombinations(2 * num, 0, [], combinations);
	return combinations;
};
//the opcion of practic
const isValid = (combination) => {
	const Stack = [];
	const arrOfCombination = combination.split('');
	arrOfCombination.forEach((elem) => {
		if (elem === ')') {
			Stack.pop();
		} else {
			Stack.push(elem);
		}
	});
	return Stack.length === 0;
};
//solve
console.log(generateCombinationP(3));
