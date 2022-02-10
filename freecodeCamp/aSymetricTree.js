/** 
given a binary tree, root check if its symmetric around its center 
(a mirror of itself)

*/
class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const inorder = (root) => {
	const nodes = [];
	if (root) {
		inorder(root.left);
		nodes.push(root.val);
		inorder(root.right);
	}
	return nodes;
};
// for our example tree, this returns [1,2,3,4,5,6]

const postorder = (root) => {
	const nodes = [];
	if (root) {
		postorder(root.left);
		postorder(root.right);
		nodes.push(root.val);
	}
	return nodes;
};
// for our example tree, this returns [1,3,2,6,5,4]

const preorder = (root) => {
	const nodes = [];
	if (root) {
		nodes.push(root.val);
		preorder(root.left);
		preorder(root.right);
	}
	return nodes;
};

// for our example tree, this returns [1,3,2,6,5,4]

const bst = new TreeNode(4, 2, 5);

console.log(inorder(bst));
