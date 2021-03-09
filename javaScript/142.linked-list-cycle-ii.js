/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 *  解題思路: 當快慢指針在環內相遇時
 *  再創一個從head開始走的指針
 *  (走的步數可與長或短其中一個一樣即可)
 *  當相遇時 即為環的起始點
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return null;
    let pre = head,cur = head;
    while(cur && cur.next){
      pre = pre.next;
      cur = cur.next.next;
      if(pre === cur){
        let temp = head;
        while(temp !== pre){
          temp = temp.next;
          pre = pre.next;
        }
        return pre
      }
    }
    return null
};
// @lc code=end

