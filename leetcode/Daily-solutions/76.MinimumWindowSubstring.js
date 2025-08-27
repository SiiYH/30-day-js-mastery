/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    const need = new Map();
    for(tChar of t){
        need.set(tChar, (need.get(tChar) || 0) + 1);
    }

    const window = new Map();
    let have = 0, needCount = need.size;
    let res = [-1, -1];
    let resLen = Infinity;
    let left = 0;

    for(let right = 0; right < s.length; right++){
        let sChar = s[right];
        window.set(sChar, (window.get(sChar) || 0) + 1);

        if (need.has(sChar) && window.get(sChar) === need.get(sChar)){
            have ++;
        }

        while(have === needCount){
            let windowCount = (right - left) + 1;
            if (windowCount < resLen){
                res = [left, right];
                resLen = windowCount;
            }

            let leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);
            if(need.has(leftChar) && window.get(leftChar) < need.get(leftChar)){
                have--;
            }
            left ++;
        }
    }
    let [l, r] = res;
    return resLen === Infinity ? "" : s.slice(l,r+1);   
};