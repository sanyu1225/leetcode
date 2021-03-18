/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * 將鏈串成環形鏈表
 * 在翻轉k次 
 * 在將head前一個節點的下一個指向空
 * (再把環形改成普通鏈表)
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null;
    let cur = head,size = 1;
    while (cur.next){
        cur = cur.next;
        size++;
    } 
    cur.next = head;
    // 這邊k&size 是為了簡化code 轉12圈跟轉2圈的意思是一樣的
    for(let i = 0; i < size - k%size -1 ; i++){
        head = head.next;
    }
    cur = head.next;
    head.next = null;
    return cur
};
// @lc code=end

