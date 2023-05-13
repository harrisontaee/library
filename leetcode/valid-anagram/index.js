/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    const letters = {};
    for (let char of s) {
        if (char in letters) letters[char]++;
        else letters[char] = 1;
    };

    for (let char of t) {
        if (!(char in letters)) return false;
        if (letters[char] === 1) delete letters[char];
        else letters[char]--;
    }

    return true;
};