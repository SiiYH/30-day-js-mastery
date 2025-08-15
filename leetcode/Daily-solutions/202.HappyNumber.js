/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getSumOfSquare = (num) => {
        let sum = 0;

        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num/10);
        }

        return sum;
    }

    let seen = new Set();
    while(n !== 1 && !seen.has(n)){
        seen.add(n);
        n = getSumOfSquare(n);
    }

    return n===1;

};