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
var buildTreeRecursive = function(inorder, postorder) {
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

var buildTreeMap = function (inorder, postorder){
    //performance issue
    let indexMap = {};
    for(let i = 0; i < inorder.length; i++){
        indexMap[[inorder[i]]] = i;
    }

    let postIndex = postorder.length - 1;

    const helper = (inLeft, inRight)=>{
        if (inLeft > inRight) return null;

        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);

        const index = indexMap[rootVal];

        root.right = helper(index+1, inRight);
        root.left = helper(inLeft, index-1);
        
        return root;
    }

    return helper(0, inorder.length-1);

}