const { palindrome, palindromeRecursive, palindromeLoop } = require('./');

describe('Palindrome', () => {
	it('should be return true when call with TENET', () => {
		const result = palindrome('TENET');

		expect(result).toBeTruthy();
	});

	it('should be return false when call with AABCAA', () => {
		const result = palindrome('AABCAA');

		expect(result).toBeFalsy();
	});

	it('should be return true when call with TENNET', () => {
		const result = palindrome('TENNET');

		expect(result).toBeTruthy();
	});
});

describe('Palindrome recursive', () => {
	it('should be return true when call with TENET', () => {
		const result = palindromeRecursive('TENET');

		expect(result).toBeTruthy();
	});

	it('should be return false when call with AABCAA', () => {
		const result = palindromeRecursive('AABCAA');

		expect(result).toBeFalsy();
	});

	it('should be return true when call with TENNET', () => {
		const result = palindromeRecursive('TENNET');

		expect(result).toBeTruthy();
	});
});


describe('Palindrome loop', () => {
	it('should be return true when call with TENET', () => {
		const result = palindromeLoop('TENET');

		expect(result).toBeTruthy();
	});

	it('should be return false when call with AABCAA', () => {
		const result = palindromeLoop('AABCAA');

		expect(result).toBeFalsy();
	});

	it('should be return true when call with TENNET', () => {
		const result = palindromeLoop('TENNET');

		expect(result).toBeTruthy();
	});
});
