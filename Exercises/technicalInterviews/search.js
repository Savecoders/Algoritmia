// ! my first soluction
/* let verbSearch = 'hello';
let text = 'Hello my name is Salva Working in my Housing';
let arr = text.toLowerCase().split(' ');
function search(arr, verb) {
	let test = false;
	arr.forEach((element) => {
		if (element === verb) {
			test = true;
		}
	});
	return test;
}
console.log(search(arr, verbSearch));
 */
// ! my last soluction

let verbSearch = 'hello';
let text = 'Hello my name is Salva Working in my Housing';
let arr = text.toLowerCase().split(' ');
console.log(arr.includes(verbSearch));
