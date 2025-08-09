/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return;
    let prefix = strs[0];
    for(let i = 1; i<strs.length; i++){
        while (prefix && !strs[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1);
        }

        if(!prefix){
            break;
        }
    }

    return prefix;
};