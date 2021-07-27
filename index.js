/**
 * Palindrome use reverse build in js
 */
function palindrome(word) {
	const words = word.toLowerCase().split('');
	return words.join('') === words.reverse().join('');
}

/**
 * Palindrome recursive function
 */
function palindromeRecursive(word) {
	return word === _reverseRecursive(word);
}

function _reverseRecursive (str) {
	return str !== '' ? _reverseRecursive(str.substr(1)) + str.charAt(0) : '';
}

/**
 * Palindrome loop
 */
function palindromeLoop(word) {
	const words = word.toLowerCase().split('');
	return words.join('') === _reverseLoop(words).join('');
}

function _reverseLoop(words) {
	const reverseWord = [];
	for (let i = words.length - 1; i >= 0; i--) {
		reverseWord.push(words[i]);
	}
	return reverseWord;
}

module.exports = {
	palindrome,
	palindromeRecursive,
	palindromeLoop
};