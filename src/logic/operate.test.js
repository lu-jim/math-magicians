// const operate = require('./operate');
import operate from './operate';

describe('when operation is \'+\'', () => {
  test('3 + 5 returns 8', () => {
    expect(operate(3, 5, '+')).toBe('8');
  });

  test('-3 + 5 returns 2', () => {
    expect(operate(-3, 5, '+')).toBe('2');
  });

  test('-3 + -5 returns -8', () => {
    expect(operate(-3, -5, '+')).toBe('-8');
  });

  test('3.4 + -5.1 returns -2.3', () => {
    expect(operate(3.4, -5.1, '+')).toBe('-1.7');
  });
});

describe('when operation is \'-\'', () => {
  test('3 - 5 returns -2', () => {
    expect(operate(3, 5, '-')).toBe('-2');
  });

  test('-3 - 5 returns -8', () => {
    expect(operate(-3, 5, '-')).toBe('-8');
  });

  test('-3 - -5 returns 2', () => {
    expect(operate(-3, -5, '-')).toBe('2');
  });

  test('3.4 + -5.1 returns 8.5', () => {
    expect(operate(3.4, -5.1, '-')).toBe('8.5');
  });
});

describe('when operation is \'x\'', () => {
  test('3 x 5 returns 15', () => {
    expect(operate(3, 5, 'x')).toBe('15');
  });

  test('-3 x 5 returns -15', () => {
    expect(operate(-3, 5, 'x')).toBe('-15');
  });

  test('-3 x -5 returns 15 ', () => {
    expect(operate(-3, -5, 'x')).toBe('15');
  });

  test('3.4 x -5.1 returns -17.34', () => {
    expect(operate(3.4, -5.1, 'x')).toBe('-17.34');
  });
});

describe('when operation is \'÷\'', () => {
  test('throws error if divided by 0', () => {
    expect(operate(3, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('3 ÷ 5 returns 0.6', () => {
    expect(operate(3, 5, '÷')).toBe('0.6');
  });

  test('-3 ÷ 5 returns -0.6', () => {
    expect(operate(-3, 5, '÷')).toBe('-0.6');
  });

  test('-3 ÷ -5 returns 0.6', () => {
    expect(operate(-3, -5, '÷')).toBe('0.6');
  });

  test('3.4 + -5.1 returns -0.666', () => {
    expect(parseFloat(operate(3.4, -5.1, '÷'), 10)).toBeCloseTo(-0.666, 0.001);
  });
});

describe('when operation is \'%\'', () => {
  test('throws error if divided by 0', () => {
    expect(operate(3, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('3 % 5 returns 3', () => {
    expect(operate(3, 5, '%')).toBe('3');
  });

  test('-3 % 5 returns -3', () => {
    expect(operate(-3, 5, '%')).toBe('-3');
  });

  test('-3 % -5 returns -3', () => {
    expect(operate(-3, -5, '%')).toBe('-3');
  });
});
