

/**
 * Problem: Add Two Numbers
 * LeetCode: #2
 * Difficulty: Medium
 * Topics: Linked List, Math
 *
 * Approach:
 * - Traverse both linked lists simultaneously.
 * - Add corresponding digits along with any carry from the previous step.
 * - Create a new linked list to store the result.
 * - Continue until both lists are exhausted and no carry remains.
 *
 * Time Complexity: O(max(m, n))
 * Space Complexity: O(max(m, n))
 *
 * Author: Rasel Chowdhury
 */


var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0);
    let currentNode = node;
    let carry = 0;

    while(l1 || l2 || carry){
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        let sum = l1Value + l2Value + carry;

        carry = Math.floor(sum/10);
        
        currentNode.next = new ListNode(sum % 10);

        currentNode = currentNode.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    return node.next;
};