/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * 解題思路:
 * 建立兩個指針 pre指向頭,cur指向頭的下一個
 * 再去做比對,若不一樣就把pre指向原本的cur位置
 * 若一樣就把cur繼續往下走
 * 直到cur為空時 就把pre指向空 (防止最後兩個節點是一樣的值)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return null;
    let pre = head, cur = head.next;
    while (cur) {
        if (pre.val !== cur.val) {
            [pre.next, pre, cur] = [cur, cur, cur.next];
        } else {
            cur = cur.next;
        }
    }
    pre.next = null;
    return head;
};
// @lc code=end
