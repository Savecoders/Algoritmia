const symbolInclude = (character) => ['(', '{', '['].includes(character);

const SearchSymbolsOpen = (stringSymbols) => {
	if (stringSymbols === '') return 'No have Data';
	const Stack = [];
	const Symbols = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	const arrOfSymbols = stringSymbols.split('').filter((e) => e !== ' ');
	// for earch of arrOfSymbols
	arrOfSymbols.forEach((key) => {
		if (symbolInclude(key)) {
			if (key === Symbols[Stack[Stack.length - 1]]) {
				Stack.pop();
			} else {
				Stack.push(key);
			}
		} else {
			return false;
		}
	});
	return Stack.length === 0;
};

console.log(SearchSymbolsOpen('[()]{}{[()()]()}'));
console.log(SearchSymbolsOpen('[(])'));
console.log(SearchSymbolsOpen(''));
