/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return -1;
    
    if (needle.length > haystack.length) return -1;

    for(let i =0; i<haystack.length; i++){
        if(haystack.substring(i, i+needle.length) === needle)return i;
    }
    return -1;
};