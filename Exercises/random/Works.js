const read = require('fs');
const file = read.readFileSync('searchWork.txt', 'utf-8');
const breakingFile = (contentFile) =>
	contentFile
		.toLowerCase()
		.replace(/\n/g, ' ')
		.split(' ')
		.filter((f) => f);

const HaspMap = (list) => {
	let AccontOfWord = {};
	list.forEach((word) => {
		AccontOfWord[word] = !AccontOfWord[word] ? 1 : 1 + AccontOfWord[word];
	});

	return Object.keys(AccontOfWord)
		.map((work) => ({
			language: work,
			jobs: AccontOfWord[work],
		}))
		.sort((a, b) => b.jobs - a.jobs);
};

const listWord = breakingFile(file);

console.table(HaspMap(listWord));
console.log(listWord.length);
