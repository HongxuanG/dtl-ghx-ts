interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// 二叉树的中序遍历
type InorderTraversal<T extends TreeNode | null> =
  T extends TreeNode
    ? T['left'] extends TreeNode 
      ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
      : T['right'] extends TreeNode
        ? [T['val'], ...InorderTraversal<T['right']>]
        : [T['val']]
    : []










