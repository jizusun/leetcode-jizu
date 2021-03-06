const {run} = require('lib');
const index = require('./index');

const runTests = letterCombinations => {

  test('normal case', () => {
    const digits = '23';
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    const actual = letterCombinations(digits);
    expect(actual).toEqual(expected);
  });

  test('edge case', () => {
    const digits = '';
    const expected = [];
    const actual = letterCombinations(digits);
    expect(actual).toEqual(expected);
  });

};

run(index, runTests);
