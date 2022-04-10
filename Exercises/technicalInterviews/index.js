// funcion de suma total
const suma = (ns) => {
	let acumulado = 0;
	for (i = 0; i < ns.length; i++) {
		acumulado += ns[i];
	}

	return acumulado;
};
const unoAlCinco = [1, 2, 3, 4, 5];

const multiplicados = unoAlCinco.map((x) => x * 4);

const parejas = unoAlCinco.map((x) => [x, x]);

//const unoAlCinco = [1, 2, 3, 4, 5];

const mascotas = [
	{ nombre: 'peluza', edad: 12, tipo: 'perro' },
	{ nombre: 'Pulga', edad: 10, tipo: 'perro' },
	{ nombre: 'Pelusa', edad: 12, tipo: 'gato' },
	{ nombre: 'Chanchito feliz', edad: 3, tipo: 'perro' },
];
// edad Promedio
const edades = mascotas.map(({ edad }) => edad);
const resultado = suma(edades);
console.log(resultado / edades.length);
