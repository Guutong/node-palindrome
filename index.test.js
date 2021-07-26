const palindrome = require('./');

describe('Palindrome', () => {
	it('should be return true when call with TENET', () => {
		const result = palindrome('TENET');

		expect(result).toBeTruthy();
	});

	it('should be return true when call with AABCAA', () => {
		const result = palindrome('AABCAA');

		expect(result).toBeFalsy();
	});

	it('should be return true when call with TENNET', () => {
		const result = palindrome('TENNET');

		expect(result).toBeTruthy();
	});
});

