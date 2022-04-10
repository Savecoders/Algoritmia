/*Crear un Objeto con un metodo llamado que se llama 
"Hello" y que escriba el nombre en consola

const obj = {
  name: "javier",
  hello:()=>{
    console.log(obj.name)
  }
}
obj.hello()
obj.name = "oscard":w

obj.hello()
Object.freeze(obj)i
obj.name = "andres"
obj.hello()
*/
/* mostrar las 5 cuidades que mas se repiten del arreglo */

const city = [
	'guayaquil',
	'quito',
	'chimborazo',
	'chimborazo',
	'cuenca',
	'quito',
	'santa elena',
	'guayaquil',
	'guayaquil',
	'imbabura',
	'chimborazo',
	'machala',
	'machala',
	'quito',
	'quito',
	'cuenca',
	'cuenca',
	'manta',
];
const fivecitys = (numcitys) => {
	let obj = {};
	city.forEach((element) => {
		obj[element] = !obj[element] ? 1 : (obj[element] += 1);
	});
	return Object.keys(obj)
		.map((citys) => ({ name: citys, cont: obj[citys] }))
		.sort((a, b) => b.cont - a.cont)
		.slice(0, numcitys);
};

console.log(fivecitys(5));
