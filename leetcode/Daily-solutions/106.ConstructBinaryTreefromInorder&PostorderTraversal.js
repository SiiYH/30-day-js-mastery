/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length || !postorder.length) return null;

    const rootVal = postorder.pop();
    const root = new TreeNode(rootVal);

    const rootIndex = inorder.indexOf(rootVal);

    const inorderLeft = inorder.slice(0, rootIndex);
    const inorderRight = inorder.slice(rootIndex+1);

    const postorderRight = postorder.slice(inorderLeft.length);
    const postorderLeft = postorder.slice(0, inorderLeft.length);

    root.right = buildTree(inorderRight, postorderRight);
    root.left = buildTree(inorderLeft, postorderLeft);

    return root;
};