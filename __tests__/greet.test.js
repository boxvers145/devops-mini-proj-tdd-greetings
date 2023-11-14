
const greet = require('../greet');

test('greet function returns greeting', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});

test('greet function check null, undefined, and empty string', () => {
    expect(greet(null)).toBe('Hello, my friend.');
    expect(greet(undefined)).toBe('Hello, my friend.');
    expect(greet('')).toBe('Hello, my friend.');
});

test('greet function check only uppercase name', () => {
    expect(greet('JERRY')).toBe('HELLO, JERRY!');
});

test('greet function handles array of two names', () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
});