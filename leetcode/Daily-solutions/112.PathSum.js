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

var hasPathSumBFS = function(root, targetSum) {

    if(!root) return false;

    let queue = [[root, root.val]];

    while(queue.length > 0){
        let [node, sum] = queue.shift();

        if(!node.left && !node.right && targetSum === sum) return true;

        if(node.left){
            queue.push([node.left, sum + node.left.val]);
        }
        if(node.right){
            queue.push([node.right, sum + node.right.val]);
        }
    }

    return false;
}

var hasPathSumDFS = function(root, targetSum) {

    if (root === null) return false;

    let stack = [[root, root.val]];

    while(stack.length > 0){
        let [node, sum] = stack.pop();

        if(!node.right && !node.left && targetSum === sum) return true;

        if(node.right){
            stack.push([node.right, sum + node.right.val]);
        }

        if(node.left){
            stack.push([node.left, sum + node.left.val]);
        }
    }
    return false;
};