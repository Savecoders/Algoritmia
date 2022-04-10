/*
	 engo una matriz

	 Matriz = [ [0, 20], [3, 80] , [2, 50], [0, 30] , [3, 20] ];

	 Y el primer número de cada array es su ID y el segundo su peso, ahora bien, quiero crear otra matriz que no tenga arrays con la misma ID y si hay uno duplicado que sus pesos se sumen y quede como uno solo, por ejemplo.

	 Matriz = [ [0, 20], [3, 80] , [2, 50], [0, 30] , [3, 20] ];

	 MatrizsinDuplicado = [ [0, 50], [3, 100] , [2, 50], ];
	 */
const removeDuplicateMatriz = (myMatriz) => {
	let objMatriz = {};
	myMatriz.forEach((element) => {
		const [firstEl, secondEl] = element;
		objMatriz[firstEl] = !objMatriz[firstEl]
			? secondEl
			: (objMatriz[firstEl] += secondEl);
	});
	return Object.entries(objMatriz);
};

let matriz = [
	[0, 20],
	[3, 80],
	[2, 50],
	[0, 30],
	[3, 20],
];

const resolveMatriz = removeDuplicateMatriz(matriz);
console.log(resolveMatriz);
