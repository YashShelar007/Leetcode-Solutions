// move zeros problem
// my initial solution O(n^2)

var moveZeroes = function(nums) {
    
    var currNumer = null;
    var attachNumber = 0;
    // check input
    if(!nums || nums.length === 0)
    {
        print("HMM! that does not look good");
    }

    if(nums.length === 1)
    {
        return nums
    }
    else
    {
        for(let i = 0; i < nums.length; i++)
        {
            if(nums[i] !== 0)
            {
                currNumber = nums[i];
                for(let j = i; j > attachNumber; j--)
                {
                    nums[j] = nums[j - 1];
                }
                nums[attachNumber] = currNumber;
                attachNumber++;
            }
        }
    }
};
