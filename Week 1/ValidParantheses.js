// Valid Parantheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// My initial solution using Array O(n)
var isValid = function(s) {
    var bracketArray = []

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            bracketArray.push(s[i]);
        }
        if(s[i] == ')') {
            const lastAdded = bracketArray.pop();
            if(lastAdded != '(') {
                return false
            }
        }
        if(s[i] == ']') {
            const lastAdded = bracketArray.pop();
            if(lastAdded != '[') {
                return false
            }
        }
        if(s[i] == '}') {
            const lastAdded = bracketArray.pop();
            if(lastAdded != '{') {
                return false
            }
        }
    }
    if(bracketArray.length !== 0) {
        return false;
    }
    return true;
};

// My Easy to Read solution O(n)
var isValid = function(s) {
    var bracketArray = []

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            bracketArray.push(')');
        }
        else if(s[i] == '[') {
            bracketArray.push(']');
        }
        else if(s[i] == '{') {
            bracketArray.push('}');
        }
        else if(bracketArray.length === 0 || bracketArray.pop() != s[i]) {
            return false;
        }
    }
    if(bracketArray.length !== 0) {
        return false;
    }
    return true;
};
