/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * 解題思路:將相鄰的兩個鏈進行反轉
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return null;
    let ret = new ListNode(-1,head),temp = ret;
    while(temp.next && temp.next.next){
        let pre = temp.next, cur = temp.next.next;
        [pre.next,cur.next,temp.next,temp] = [cur.next,pre,cur,pre];
    }
    return ret.next;
};
// @lc code=end

