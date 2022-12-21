const { default: expect } = require('expect');
const strLength = require('./task1');

test('string length', () => {
  expect(strLength('hello')).toBe(5);
  expect(strLength('Patricia')).toBe(8);
  expect(strLength('')).toBe("String length must be between 1 and 10");
  expect(strLength('Patricia123')).toBe("String length must be between 1 and 10");
});