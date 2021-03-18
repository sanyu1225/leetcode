/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * 思路跟反轉鏈II 一樣 92題目
 */

const reverse = (head,n) => {
    let pre = head, cur = head, con = n;
    while (--n && pre) {
        pre = pre.next;
    }
    if(!pre) return head;
    pre = null;
    while (con--) {
        [cur.next, pre, cur] = [pre, cur, cur.next];
    }
    head.next = cur;
    return pre;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head) return null;
    let ret = new ListNode(-1,head),pre = ret;
    do {
        pre.next = reverse(pre.next,k)
        for(let i = 0;i< k && pre ; i++){
            pre = pre.next;
        }
        if(!pre) break;
    } while (1);
    return ret.next
};
// @lc code=end

