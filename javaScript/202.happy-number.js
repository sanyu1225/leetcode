/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * 解題思路: 一樣用長短指針方法解
 * 寫一個取得下一個數字的方法
 * 當可以取得1 就是快樂數字
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 const getNextNum = (n) =>{
  let val = 0;
  while(n){
    val += (n%10) * (n%10)
    n = Math.floor(n/10);
  }
  return val;
}
var isHappy = function(n) {
  let pre = n; cur = getNextNum(n);
  while(pre !== cur && cur !== 1){
    pre = getNextNum(pre);
    cur = getNextNum(getNextNum(cur))
  }
  return cur === 1
};
// @lc code=end

