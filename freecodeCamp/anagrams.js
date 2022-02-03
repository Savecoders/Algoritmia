/* 
  given two strings s1 and s2, check if they are anagrams. two strings are 
  anagrams if they are made of the same characters with the same frequencies
*/
//* My solve
const isAnagrams = (s1, s2) => {
	if (s1.length !== s2.length) return false;
	for (const character of s1) {
		if (!s2.includes(character)) {
			return false;
		}
	}
	return true;
};

//!completed question
console.log(isAnagrams('hello', 'olleh'));

//? solve freecodeCamp
const FreeisAnagrams = (s1, s2) => {
	let objS1 = {};
	let objS2 = {};

	for (let iterator = 0; iterator < s1.length; iterator++) {
		objS1[s1[iterator]] = !objS1[s1[iterator]] ? 1 : (objS1[s1[iterator]] += 1);
		objS2[s2[iterator]] = !objS2[s2[iterator]] ? 1 : (objS2[s2[iterator]] += 1);
	}

	for (const key in objS1) {
		if (!objS2[key] || objS1[key] !== objS2[key]) {
			return false;
		}
	}
	return true;
};
console.log(FreeisAnagrams('danger', 'garden'));

//! My solve is faster
