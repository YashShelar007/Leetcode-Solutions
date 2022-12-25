// Roman To Integer
// Given a roman numeral, convert it to an integer.

// My initial if else based solution O(n)
var romanToInt = function(s) {
    var sum = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'I') {
            sum = sum + 1;
            if(s[i + 1] === 'V' || s[i + 1] === 'X') {
                sum = sum - 2;
            }
        }
        if(s[i] === 'V') {
            sum = sum + 5;
        }
        if(s[i] === 'X') {
            sum = sum + 10;
            if(s[i + 1] === 'L' || s[i + 1] === 'C') {
                sum = sum - 20;
            }
        }
        if(s[i] === 'L') {
            sum = sum + 50;
        }
        if(s[i] === 'C') {
            sum = sum + 100;
            if(s[i + 1] === 'D' || s[i + 1] === 'M') {
                sum = sum - 200;
            }
        }
        if(s[i] === 'D') {
            sum = sum + 500;
        }
        if(s[i] === 'M') {
            sum = sum + 1000;
        }
    }
    return sum;
};
