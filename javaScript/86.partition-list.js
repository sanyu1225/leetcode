/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head) return null;
    //創建大跟小的鍊 一個裝大於的一個裝小於的
    let big = new ListNode(), small = new ListNode();
    // 指向剛創的鍊錶 不然一直往下移動會丟失鍊表頭
    let bigNode = big, smallNode = small;
    // 定義原鍊錶的頭指針, 進行比較 連接對應的鍊錶(big or small)然後進行後移
    for (let cur = head, next; cur; cur = next) {
        [next, cur.next] = [cur.next, null];
        if (cur.val < x) {
            [smallNode.next, smallNode] = [cur, cur]
        } else {
            [bigNode.next, bigNode] = [cur, cur]
        }
    }
    // 最終將大小串再一起
    smallNode.next = big.next;
    return small.next;
};
// @lc code=end

