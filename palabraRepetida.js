let texts = 'My name is a is Salva, I am programm Developer is playing   NodeJs    ';
const arrOfText = (text) =>
	text
		.split(',')
		.join('')
		.split(' ')
		.filter((e) => e);
const getRepeatedWord = (arr) => {
	let objWord = {};
	arr.forEach((word) => {
		objWord[word] = !objWord[word] ? 1 : (objWord[word] += 1);
	});
	return Object.keys(objWord)
		.map((word) => ({ word: word, repeateds: objWord[word] }))
		.sort((a, b) => b.repeateds - a.repeateds)
		.map((arr) => arr.word)[0];
};
let newArr = [1, 2, 3, 4];
console.log(getRepeatedWord(arrOfText(texts)));
