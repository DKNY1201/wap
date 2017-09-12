'use strict';

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(1,6));

function maxOfThree(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    return max;
}
console.log(maxOfThree(4,7,6));

function isVowel(c) {
    var vowel = ['a', 'e', 'o', 'i', 'u'];
    return vowel.indexOf(c) != -1 ? true : false;
}
console.log(isVowel('a'));
console.log(isVowel('c'));

function sum(arr) {
    if (!(arr instanceof Array)) {
        return 'Please input an Array';
    }

    let sum = 0;
    if (arr.length > 0) {
        for (let i of arr) {
            sum += i;
        }
    }

    return sum;
}
console.log(sum([1,2,3,4]));

function multiply(arr) {
    if (!(arr instanceof Array)) {
        return 'Please input an Array';
    }

    let product = 1;
    if (arr.length > 0) {
        for (let i of arr) {
            product *= i;
        }
    }

    return product;
}
console.log(multiply([1,2,3,4]));

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Please input a string';
    }

    let i;
    let result = '';
    for (i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }

    return result;
}
console.log(reverse('Maharishi'));

function findLongestWord(words) {
    if (!(words instanceof Array)) {
        return 'Please input an Array';
    }

    let longestLen = 0;
    let idx = 0;
    let i;

    for (i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > longestLen) {
            longestLen = word.length;
            idx = i;
        }
    }

    return words[idx];
}
console.log(findLongestWord(['peter', 'marry', 'bob', 'jack','marilyn']));

function filterLongWords(words, n) {
    if (!(words instanceof Array)) {
        return 'Please input an Array';
    }

    let newWords = [];
    let i;

    for (i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > n) {
            newWords.push(word);
        }
    }

    return newWords;
}
console.log(filterLongWords(['peter', 'marry', 'bob', 'jack','marilyn'], 4));