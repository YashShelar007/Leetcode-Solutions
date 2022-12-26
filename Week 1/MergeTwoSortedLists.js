// Merge Two Sorted Lists
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// My solution using Recursion O(n)
var mergeTwoLists = function(list1, list2) {
    if(!list1) {
        return list2;
    }
    if(!list2) {
        return list1;
    }
    if(list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }
};

// Not trying iterative approach as of now
