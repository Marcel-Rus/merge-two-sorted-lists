/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let newList = null;

    if (l1 === null && l2 === null) {
        return newList;
    }

    else if (l1 !== null && l2 !== null) {
        
        if (l1.val <= l2.val) {
            newList = l1;
            l1 = l1.next;
        }

        else {
            newList = l2;
            l2 = l2.next;
        }
    }

    else if (l1 !== null) {
        newList = l1;
        l1 = l1.next;
    }
    
    else {
        newList = l2;
        l2 = l2.next;
    }

    let node = newList;

    while (l1 !== null && l2 !== null) {

        if (l1.val <= l2.val) {
            node.next = l1;
            l1 = l1.next;
        }

        else {
            node.next = l2;
            l2 = l2.next;
        }

        node = node.next;
    }

    while (l1 !== null) {
        node.next = l1;
        node = node.next;
        l1 = l1.next;
    }

    while (l2 !== null) {
        node.next = l2;
        node = node.next;
        l2 = l2.next;
    }

    return newList;
};

