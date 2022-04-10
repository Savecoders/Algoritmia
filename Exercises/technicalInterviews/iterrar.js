//mostrar el numero mayor de un arreglo, pero  solo
//iterrar una sola vez.
//como yo lo hice

//const iterrar = (arr) => arr.sort((a, b) => b - a)[0];

//como lo hizo @iterrar de Hola mundo.
const iterrarS = (arr) =>
	arr.reduce((previous, current) => (previous > current ? previous : current), []);

console.log(iterrar([3, 2, 10, 45]));
