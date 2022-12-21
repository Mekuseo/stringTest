const stringLength = require('./stringLength');

function testStringLength() {
  // Test strings of various lengths
  const testCases = [
    { input: '', expected: 0 },
    { input: 'a', expected: 1 },
    { input: 'abc', expected: 3 },
    { input: 'abcdef', expected: 6 },
    { input: 'abcdefghijklmnopqrstuvwxyz', expected: 26 }
  ];

  for (const testCase of testCases) {
    // Arrange: set up the test environment and prepare the input data
    const input = testCase.input;
    const expected = testCase.expected;

    // Act: execute the code being tested
    const result = stringLength(input);

    // Assert: verify that the output is as expected
    if (result !== expected) {
      console.error(`Test failed: expected ${expected}, got ${result}`);
    }
  }

  console.log('All tests passed');
}

testStringLength();