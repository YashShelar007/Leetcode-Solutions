// Climbing Stairs
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// My initial solution O(n)
var climbStairs = function(n) {
    var array = [0, 1, 2];
    for(var i = 3; i <= n; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n];
};

// My improved solution using hashmaps O(n)
var climbStairs = function(n) {
    let sm = stairMaster();
    return sm(n);
};

function stairMaster() {
    let cache = {};
    return function fib(n) {
        if(n in cache) {
            return cache[n];
        }
        else {
            if(n <= 2) {
                return n;
            }
            else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}
