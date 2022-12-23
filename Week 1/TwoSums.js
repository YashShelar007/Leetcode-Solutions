//Two Sum

// my solution O(n^2)

var twoSum = function(nums, target) {
    
    var resultArr = [];
    var currSum = 0;
    //check input
    if(!nums || nums.length === 0)
    {
        console.log("Hmm!! That does not look good : (")
    }

    for(let i = 0; i < nums.length; i++)
    {
        for(let j = 0; j < nums.length; j++)
        {
            if(i != j)
            {
                currSum = nums[i] + nums[j];
                if(currSum === target)
                {
                    resultArr.push(i);
                    resultArr.push(j);
                    return resultArr;
                }
            }
        }
    }
};

// hashmaps solution O(n)
var twoSum = function(nums, target) {
    
    var resultArr = [];
    var diff = 0;
    var arrMap = {};
    //check input
    if(!nums || nums.length === 0)
    {
        console.log("Hmm!! That does not look good : (")
    }

    //create a hashmap
    for(let i = 0; i < nums.length; i++)
    {
        arrMap[nums[i]] = i
    }

    for(let i = 0; i < nums.length; i++)
    {
        diff = target - nums[i];
        var secondInt = arrMap[diff]
        if(secondInt != null && secondInt != i)
        {
            resultArr.push(i);
            resultArr.push(secondInt);
            return resultArr
        }
    }
};
