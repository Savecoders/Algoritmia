// buscar la suma iterrando solo 1 for
//! the arr isnot order

const input = [5, 3, 6, 9, 7, 2, 4];

const searchSum = (arr, search) => {
	let diference = {};
	for (let index of arr) {
		if (diference[index]) {
			//return [key and value]
			return [diference[index], index];
		}
		diference[search - index] = index;
	}
	//return static
	return [];
};

console.log(searchSum(input, 16));
