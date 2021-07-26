function palindrome(word) {
	const words = word.toLowerCase().split('');
  return words.join('') === words.reverse().join('');
}
module.exports = palindrome;