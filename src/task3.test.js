const Calculator = require('./task3');

test('add', () => {
  expect(Calculator.add(1, 2)).toBe(3);
  expect(Calculator.add(1, -2)).toBe(-1);
  expect(Calculator.add(1, 0)).toBe(1);
});

test('subtract', () => {
  expect(Calculator.subtract(1, 2)).toBe(-1);
  expect(Calculator.subtract(1, -2)).toBe(3);
  expect(Calculator.subtract(1, 0)).toBe(1);
});

test('multiply', () => {
  expect(Calculator.multiply(1, 2)).toBe(2);
  expect(Calculator.multiply(1, -2)).toBe(-2);
  expect(Calculator.multiply(1, 0)).toBe(0);
});

test('divide', () => {
  expect(Calculator.divide(1, 2)).toBe(0.5);
  expect(Calculator.divide(1, -2)).toBe(-0.5);
  expect(Calculator.divide(1, 0)).toBe(Infinity);
});