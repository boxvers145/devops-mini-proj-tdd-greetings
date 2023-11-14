
const greet = require('../greet');

test('greet function returns greeting', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.');
});

test('greet function check null, undefined, and empty string', () => {
    expect(greet(null)).toBe('Hello, my friend.');
    expect(greet(undefined)).toBe('Hello, my friend.');
    expect(greet('')).toBe('Hello, my friend.');
});

test('greet function check only uppercase name', () => {
    expect(greet('KENOBI')).toBe('HELLO, KENOBI!');
});

test('greet function check two names', () => {
    expect(greet(['Kratos', 'Thanathos'])).toBe('Hello, Kratos and Thanathos.');
});