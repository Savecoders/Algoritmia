/*
  given a sorted array of integers arr and an integer target, find the index 
  of the first and last position of target in arr. in target cant be found 
  in arr, return [-1.-1]
*/

const input = [2, 4, 5, 5, 5, 7, 9, 9];
const target = 5;

//! my solve
const arrTarget = (arr, target) => {
	const index = arr.indexOf(target);
	const fillTarget = arr.filter((num) => num === target);
	if (!fillTarget.length || index === 0) {
		return [-1, -1];
	}
	return [index, index + fillTarget.length - 1];
};
console.log(arrTarget([2, 4, 5, 5, 5, 7, 9, 9], 5));

//? solve freecodeCamp

const findStart = (arr, target) => {
	if (arr[0] === target) {
		return 0;
	}
	let [left, rigth] = [0, arr.length - 1];
	while (left <= rigth) {
		let mid = Math.floor((left + rigth) / 2);
		if (arr[mid] === target && arr[mid - 1] < target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			rigth = mid - 1;
		}
	}
	return -1;
};

const findEnd = (arr, target) => {
	if (arr[-1] === target) {
		return arr.length - 1;
	}
	let [left, rigth] = [0, arr.length - 1];
	while (left <= rigth) {
		let mid = Math.floor((left + rigth) / 2);
		if (arr[mid] === target && arr[mid + 1] > target) {
			return mid;
		} else if (arr[mid] > target) {
			rigth = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return -1;
};

const firstAndLast = (arr, target) => {
	if (arr.length === 0 || arr[0] > target || arr[-1] < target) {
		return [-1, -1];
	}
	let solve = [findStart(arr, target), findEnd(arr, target)];
	return solve;
};
console.log(firstAndLast(input, target));
