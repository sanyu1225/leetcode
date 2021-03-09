/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 解法用長短指針解
 * 就像跑操場一樣
 * 兩名跑者 一名跑速1 一名跑速2
 * 只要跑道是圓的 
 * 必定跑快的會倒追跑慢的跑者（即相遇）
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if(!head) return false;
  let pre = head, cur = head;
  while (cur && cur.next) {
    pre = pre.next;
    cur = cur.next.next;
    if(pre === cur) return true
  }
  return false
};
// @lc code=end

