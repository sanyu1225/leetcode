/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * 解題思路: 創一個虛頭,兩個指針,一個指向虛頭pre,一個指向原本的head
 * 讓cur移動n步,再讓兩個指針pre,cur一起移動 直到cur為空(代表以到結束節點)
 * 即可進行刪除動作 (pre指向null)
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head) return null;
    let ret = new ListNode(-1, head), pre = head, cur = head;
    for (let i = 0; i < n; i++) {
        cur = cur.next;
    }
    if (!cur) return head.next;
    while (cur) {
        [cur, pre] = [cur.next, pre.next]
    }
    pre.next = pre.next.next;
    return ret.next;
};
// @lc code=end

