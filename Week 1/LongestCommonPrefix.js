// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// My initial nested for loop solution O(n^2)
var longestCommonPrefix = function(strs) {
    var currLongest = "";
    var smallestWord = strs[0];
    for(let i = 1; i < strs.length; i++) {
        if(strs[i].length < smallestWord) {
            smallestWord = strs[i];
        }
    }

    for(let i = 0; i < smallestWord.length; i++) {
        for(let j = 0; j < strs.length; j++) {
            if(!(smallestWord[i] === strs[j][i])) {
                return currLongest;
            }
        }
        currLongest = currLongest + smallestWord[i];
    }

    return currLongest;
};

// My improved sorting (Tim sort) solution O(nlogn)
var longestCommonPrefix = function(strs) {
    var currLongest = "";
    strs.sort();

    var firstWord = strs[0];
    var lastWord = strs[strs.length - 1];

    for(let i = 0; i < strs[0].length; i++) {
        if(firstWord[i] === lastWord[i]) {
            currLongest = currLongest + firstWord[i];
        }
        else {
            return currLongest;
        }
    }

    return currLongest;
};
