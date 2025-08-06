/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleaned = s.trim().replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    // console.log(cleaned);

    return cleaned === cleaned.split('').reverse().join(''); 
};