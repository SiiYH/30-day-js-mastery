/**
 * @param {string} s
 * @return {string}
 */
var reverseWordsBuiltIn = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

var reverseWordsManual = function(s) {
    const words = [];
    let word='';

    for(let i = 0; i<s.length; i ++){
        if (s[i] !== ' '){
            word += s[i]
        }else{
            if(word.length !== 0){
                words.push(word);
                word='';
            }
        }
    }

    if(word.length>0){
        words.push(word);
    }

    return words.reverse().join(' ');
};

