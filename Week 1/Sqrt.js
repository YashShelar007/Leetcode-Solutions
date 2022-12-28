// Square root
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// You must not use any built-in exponent function or operator.

// My initial solution O(n)
var mySqrt = function(x) {
    let i = 1;
    let product = 0;
    while(1) {
        product = i * i
        if(product > x) {
            return i - 1;
        }
        i++;
    }
};

// my improved binary tree solution O(logn) using python
class Solution(object):
    def mySqrt(self, x):
        l, r = 0, x
        while l <= r:
            mid = l + (r-l)//2
            if mid * mid <= x < (mid+1)*(mid+1):
                return mid
            elif x < mid * mid:
                r = mid - 1
            else:
                l = mid + 1
