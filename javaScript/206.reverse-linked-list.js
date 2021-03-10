/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 用pre來取當作結束的節點
 * 再依序去檢查最後一個是不是null
 * 檢查到了即為最後一個節點
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null;
    let pre = null, cur = head;
    while (cur) {
      [cur.next,pre,cur] = [pre,cur,cur.next]
      // let next = cur.next;
      // cur.next = pre;
      // pre = cur;
      // cur = next;
    }
    return pre

};
// @lc code=end

