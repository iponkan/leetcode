/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (38.09%)
 * Likes:    4794
 * Dislikes: 0
 * Total Accepted:    525.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null || l2 === null) return null;

    // 使用dummyHead可以简化对链表的处理，dummyHead.next指向新链表
    let dummyHead = new ListNode(0);
    let cur1 = l1;
    let cur2 = l2;
    let cur = dummyHead; // cur用于计算新链表
    let carry = 0; // 进位标志
  
    while (cur1 !== null || cur2 !== null) {
      let val1 = cur1 !== null ? cur1.val : 0;
      let val2 = cur2 !== null ? cur2.val : 0;
      let sum = val1 + val2 + carry;
      let newNode = new ListNode(sum % 10); // sum%10取模结果范围为0~9，即为当前节点的值
      carry = sum >= 10 ? 1 : 0; // sum>=10，carry=1，表示有进位
      cur.next = newNode;
      cur = cur.next;
  
      if (cur1 !== null) {
        cur1 = cur1.next;
      }
  
      if (cur2 !== null) {
        cur2 = cur2.next;
      }
    }
  
    if (carry > 0) {
      // 如果最后还有进位，新加一个节点
      cur.next = new ListNode(carry);
    }
  
    return dummyHead.next;
};
// @lc code=end

