// Plus One
// Increment the large integer by one and return the resulting array of digits.

// My initial solution O(n)
var plusOne = function(digits) {
    // Case [1,2,3] without nine
    if(digits[digits.length - 1] !== 9) {
        digits[digits.length - 1]++;
        return digits;
    }
    else {
        // Case [8, 9] with single nine in end
        if(digits.length !== 1 && digits[digits.length - 2] !== 9) {
            digits[digits.length - 2]++;
            digits[digits.length - 1] = 0;
            return digits;
        }
        else {
            // more than one 9
            for(let i = digits.length - 1; i >= 0; i--) {
                if(digits[i] !== 9) {
                    digits[i]++;
                    return digits;
                }
                digits[i] = 0;
            }
            // all 9s
            digits[0] = 1;
            digits.push(0);
            return digits;
        }
    }
};

// My improved solution O(n)
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits[0] = 1;
    digits.push(0); 
    return digits;
};
