const invertirTexto = (text) => {
	let contText = '';
	for (var iterator of text) {
		console.log(iterator);
		contText = iterator + contText;
	}
	return contText;
};

let text = 'hola';
let containerText = invertirTexto(text);
console.log(containerText);
