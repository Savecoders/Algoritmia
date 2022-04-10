/** 
given a binary tree, root check if its symmetric around its center 
(a mirror of itself)

*/
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
const depthFirstValues = (root) => {
	if (root === null) return [];

	const result = [];
	const stack = [root];

	while (stack.length > 0) {
		const current = stack.pop();
		result.push(current.val);

		if (current.right) {
			stack.push(current.right);
		}

		if (current.left) {
			stack.push(current.left);
		}
	}
	return result.join('');
};

const symmetricTree = (root) =>
	depthFirstValues(root.left) === depthFirstValues(root.right);

// for our example tree, this returns [1,3,2,6,5,4]

const head = new TreeNode(4);
const two = new TreeNode(5);
const three = new TreeNode(5);
const four = new TreeNode(4);
const five = new TreeNode(3);
const six = new TreeNode(4);
const seven = new TreeNode(3);

head.left = two;
head.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

console.log(symmetricTree(head));
