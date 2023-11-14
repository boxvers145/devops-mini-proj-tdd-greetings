
const greet = require('../greet');

test('greet function returns greeting', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});
