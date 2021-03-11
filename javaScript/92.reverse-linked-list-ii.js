/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * 解題思路:用虛擬頭節點(pre)
 * 讓pre cur向後移動 直到找到了第m個節點 
 * 在定義con指向pre的節點tail指向cur的節點 
 * con所指向的節點是部分鏈表後,
 * 部分鏈表頭節點的前驅節點 , tail則是部分鏈表反轉後的尾節點
 * 然後開始翻轉鏈表,在定義thrid指向cur下一個節點,再將cur指向pre的節點 
 * 將pre移動到cur的位置,將cur移動到third的位置 直到pre指針指向第n個節點
 * 重複動作 直到pre指向到第m個節點 並將第m到n節點之間反轉完畢
 * 將con指針指向pre的節點 將tail指向third當前的節點
 */

const reverse = (head,n) => {
  let pre = null, cur = head;
  while(n--){
    [cur.next,pre,cur] = [pre, cur, cur.next]
  }
  head.next = cur;
  return pre;
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head) return null;
    let ret = new ListNode(-1,head), pre = ret, cnt = right - left +1;
    while(--left) {
      pre = pre.next
    }
    pre.next = reverse(pre.next,cnt)
    return ret.next
};
// @lc code=end

