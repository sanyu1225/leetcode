/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * 創建2個虛頭,跟一個指向head的cur
 * 從cur開始往下走 遇到相同的則繼續往下
 * 直到遇到不同值時，把前驅指針的next指向下面那個不同的元素
 * 如果現指針遍歷的第一個元素就不相同，則把前驅指針向下移一位
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return null;
    let ret = new ListNode(-1, head), pre = ret, cur = head;
    while (cur && cur.next) {
        if (pre.next.val !== cur.next.val) {
            [cur, pre] = [cur.next, pre.next];
        } else {
            while (cur && cur.next && pre.next.val === cur.next.val) {
                cur = cur.next;
            }
            [pre.next, cur] = [cur.next, cur.next]
        }
    }
    return ret.next;
};
// @lc code=end

