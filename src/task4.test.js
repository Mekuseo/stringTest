const capitalize = require('./task4');

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('')).toBe('');
});
