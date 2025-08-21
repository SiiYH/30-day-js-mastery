/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const bracketMap = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for (let i = 0; i < s.length; i++){
        let char = s[i];

        if (char in bracketMap){
            if(stack.length === 0 || stack.pop() !== bracketMap[char]){
                return false;
            }
            console.log(`${char}`)
        }else{
                stack.push(char);
        }
    }
    return stack.length === 0;
};