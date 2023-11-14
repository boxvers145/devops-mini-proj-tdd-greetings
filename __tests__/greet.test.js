
const greet = require('../greet');

test('greet function returns correct greeting', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});
