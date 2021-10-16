const reverseVowels = (s) => {
    s = s.split('');
    let notVowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let arr = [];

    // 第一次遍历，用arr存储所有辅音字符
    for (let char of s) {
        if (!notVowels.has(char)) {
            arr.push(char);
        }
    }

    // 第二次遍历，替换原数组的辅音字符，替换规则从arr逆序
    let cur = arr.length - 1;
    for (let i = 0; i < s.length; i++) {
        if (!notVowels.has(s[i])) {
            s[i] = arr[cur--];
        }
    }

    return s.join('');
};

console.log(reverseVowels("hello"))