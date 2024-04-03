// 递归和迭代
// 公式：
var walk = function(root) {
  function travese(node){
    // 终止条件
    if(node===null){
      return 
    }
    // 特定处理

    
    travese(node.left)
    travese(node.right)
  }
  travese(root) 
  return 结果
};

[100] 相同的树
var isSameTree = function(p, q) {
  if(p===null&&q===null){
    return true
  }
  if(p===null||q===null){
    return false
  }
  // 如果p，q节点的值相等，就递归判断其左右子树是否相等
  if(p.val === q.val){
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
  }
};

[572] 另一棵树的子树
var isSubtree = function(root, subRoot) {
  // 不停地比较， 某一个子树，是不是和subRoot一样
  if(root===null){
    return false
  }
  if(root.val===subRoot.val){
    if(isSameTree(root,subRoot)){
      return true
    }
  }
  return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};

var isSameTree = function(p, q) {
  if(p===null&&q===null){
    return true
  }
  if(p===null||q===null){
    return false
  }
  // 如果p，q节点的值相等，就递归判断其左右子树是否相等
  if(p.val === q.val){
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
  }
};

[112] 路径总和
var hasPathSum = function(root, targetSum) {

  if(root==null){
    return false
  }
  // 当遇到叶子节点，判断当前节点是否等于 剩余目标 offset
  if(!root.left && !root.right){
    return root.val ===targetSum
  }
  // 没遇到叶子节点前，targetSum 每次减去当前节点，得到剩余目标offset
  let offset = targetSum - root.val
  // 左右子树里面有一边符合就是true
  return hasPathSum(root.left,offset) || hasPathSum(root.right,offset)
};

[101] 对称二叉树
var isSymmetric = function(root) {
  const travese = (root1,root2)=>{
    if(root1===null&&root2===null){
      return true
    }
    if(root1===null||root2===null){
      return false
    }
    if(root1.val===root2.val){
      return travese(root1.left,root2.right) && travese(root1.right,root2.left)
    }
    return false
  }

  return travese(root.left,root.right)
};

[236] 二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
  if(root==null){
    return null
  }
  if(root==p || root==q){
    return root
  }
  let left = lowestCommonAncestor(root.left,p,q)
  let right = lowestCommonAncestor(root.right,p,q)
  if(left && right){
    return root
  }
  return left?left:right
};

[617] 合并二叉树
var mergeTrees = function(root1, root2) {
  function dfs(root1,root2){
    // 如果没有root1则返回root2
    if(!root1){
      return root2
    }
    // 如果没有root2则返回root1
    if(!root2){
      return root1
    }
    // 如果root1和root2都存在，则值相加
    root1.val += root2.val
    // 遍历左子树
    root1.left =dfs(root1.left,root2.left)
    // 遍历右子树
    root1.right =dfs(root1.right,root2.right)
    return root1
  }
  return dfs(root1,root2)
};

[111] 二叉树的最小深度
var minDepth = function(root) {
  if(root===null){
    return 0
  }
  if(root.left===null && root.right===null){
    return 1
  }
  if(root.left===null){
    return 1+minDepth(root.right)
  }
  if(root.right===null){
    return 1+minDepth(root.left)
  }
  return Math.min(minDepth(root.left),minDepth(root.right))+1
};

[222] 完全二叉树的节点个数
var countNodes = function(root) {
  function travese(node){
    if(node===null){
      return 0
    }
    let leftNum = travese(node.left)
    let rightNum = travese(node.right)
    return leftNum + rightNum +1
  }
  return travese(root)
};

[543] 二叉树的直径
      1
     / \
    2   3
   / \
  4   5
     / \
    6   7
var diameterOfBinaryTree = function(root) {
  let len=0
  function dfs(root){
    if(root===null){
      return 0
    }
    let left = dfs(root.left) // 递归计算左子树的深度
    let right = dfs(root.right) // 递归计算右子树的深度
    len = Math.max(len,left+right) // 更新当前路径上的直径长度，取左右子树深度之和的最大值

    // 比如节点2 左子树 的深度是 2 和 右子树的深度是 3 取最大值
    return Math.max(left,right)+1 // 返回以当前节点为根的子树的深度，加1是因为当前节点也要算进去
  }
  dfs(root)
  return len
};

[404] 左叶子之和
var sumOfLeftLeaves = function(root) {
  let leftSum = 0
  function travese(node){
    if(node===null){
      return 
    }
    // left是单独的节点
    let left = node.left
    if(left && !left.left && !left.right){
      leftSum += left.val
    }
    // left有嵌套，走递归
    travese(node.left)
    travese(node.right)
  }
  travese(root) 
  return leftSum
};








// 层序遍历题目
方法： 使用 栈 或者 队列
公式：
var walk = function(root) {
  let ret = [] //结果
  if(root===null){
    return ret
  }
  let queue = [root] //遍历中用的队列
  while(queue.length){
    let len = queue.length //一层的数据量
    let curLevel = []
    while(len){ // 遍历每一层

      问题处理
 
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    ret.push(curLevel) 汇集 每一层的数据
  }
  return ret
};

[102] 二叉树的层序遍历
      3
     / \
    9   20
       / \
      15  7

// queue [3]  1
// queue [9,20]  2
输入： root = [3, 9, 20, null, null, 15, 7]
输出：[[3], [9, 20], [15, 7]]

var levelOrder = function(root) {
  let ret = [] //结果
  if(root===null){
    return ret
  }
  let queue = [root] //遍历中用的队列
  while(queue.length){
    let len = queue.length //一层的数据量
    let curLevel = []
    while(len>0){ // 遍历每一层
      let node = queue.shift()  
      curLevel.push(node.val) 存每一层的数据
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    ret.push(curLevel) 汇集 每一层的数据
  }
  return ret
};

[107] 二叉树的层序遍历 II
      3
     / \
    9   20
       / \
      15  7

// queue [3]  1
// queue [9,20]  2
输入： root = [3, 9, 20, null, null, 15, 7]
输出：[[15, 7], [9, 20], [3]]

var levelOrderBottom = function(root) {
  let ret = [] //结果
  if(root===null){
    return ret
  }
  let queue = [root] //遍历中用的队列
  while(queue.length){
    let len = queue.length //一层的数据量
    let curLevel = []
    while(len>0){
      let node = queue.shift()  
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
    ret.unshift(curLevel)
  }
  return ret
};

 [199] 二叉树的右视图: 相当于返回 每一层最右边的一个值
var rightSideView = function(root) {
  // 每一层最右边的一个值
  let ret = []
  if(root===null){
    return ret
  }
  let queue = [root]

  while(queue.length){
    let len = queue.length
    while(len--){
      let node = queue.shift()
      if(len===0){
        ret.push(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    
  }

  return ret
};

[637] 二叉树的层平均值
var averageOfLevels = function(root) {
  let ret = []
  if(root===null){
    return ret
  }
  let queue = [root]
  while(queue.length){
    let len = queue.length
    let sum = 0
    for(let i=0;i<len;i++){
      let node = queue.shift()
      sum += node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    ret.push(sum/len)
  }
  return ret
};

[116] 填充每个节点的下一个右侧节点指针
       1
     /  \
    2    3
   / \   / \
 4    5 6   7

// [1]
// [2,3]
// 45,6,[,7]
var connect = function(root) {
  if(root===null){
    return root
  }
  let queue = [root]
  while(queue.length){
    let len = queue.length
    while(len--){
      let node = queue.shift()
      if(len>0){
        //不是最后一个
        node.next = queue[0]
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
};

[429] N 叉树的层序遍历
var levelOrder = function(root) {
  let ret = []
  if(root===null){
    return ret
  }
  let queue = [root]
  while(queue.length){
    let curLevel = []
    let len = queue.length
    for(let i=0;i<len;i++){
      let node = queue.shift()
      curLevel.push(node.val)
      // n 叉树，塞入node的所有子节点
      node.children.forEach(child=>{
        child && queue.push(child)
      })
      // node.left && queue.push(node.left)
      // node.right && queue.push(node.right)
    }
    ret.push(curLevel)
  }
  return ret
};

