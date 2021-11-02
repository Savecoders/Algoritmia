const Calc = (arrOfElements) => {
	return eval(arrOfElements.join(''));
};
const checkLastELement = (StrELement) => {
	StrELement = StrELement.split('');
	if (StrELement[StrELement.length - 1] == parseInt(StrELement[StrELement.length - 1])) {
		return StrELement;
	} else {
		StrELement.pop();
		return StrELement;
	}
};
let strOfElements = '10*5%';
console.log(Calc(checkLastELement(strOfElements)));
