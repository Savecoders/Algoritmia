//!notacion miho es basado en el numero de operaciones
//* O(1) Constant complexity No importa que tanto se provea de Inputs a una setencia/algoritmo seguira corriendo en la misma cantidad de tiempo.
//Siempre va a ser lineal.

//O(n) el tiempo de calculo incrementa al mismo tiempo que el de los inputs.

const nemo = 'nemo';
const everyone = ['dory', 'bruce', 'nemo', 'marin', 'mark'];

const findNemo = (array, person) => {
	if (array.includes(person)) {
		console.log('Found Nemo');
	} else {
		console.log('no');
	}
};

findNemo(everyone, nemo);

//O(n^2)

//Reglas

//1. Siempre apuntan al peor escenario.
//2. Quitamos las constantes.
//3. buscar complejidad espacio tiempo.
