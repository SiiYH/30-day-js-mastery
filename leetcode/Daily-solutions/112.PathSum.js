/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSumRecursive = function(root, targetSum) {

    if(!root) return false;

    if(!root.left && !root.right) return targetSum === root.val;

    let remaining = targetSum - root.val;

    return hasPathSumRecursive(root.left, remaining) || hasPathSum(root.right, remaining);
}