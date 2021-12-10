import calculate from './calculate';

describe('The calculate function is working properly', () => {
  it('The AC button clears the memory', () => {
    const mockMemory = {
      total: '5',
      next: null,
      operation: 'x',
    };
    expect(calculate(mockMemory, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('The numbers are registered as integers - no existing number', () => {
    const mockInput = '5';
    const mockMemory = {
      total: null,
      next: null,
    };
    expect(calculate(mockMemory, mockInput)).toStrictEqual({
      total: null,
      next: '5',
    });
  });
  it('The numbers are registered as integers - existing number', () => {
    const mockInput = '5';
    const mockMemory = {
      total: null,
      next: '5',
    };
    expect(calculate(mockMemory, mockInput)).toStrictEqual({
      total: null,
      next: '55',
    });
  });
  it('Button =  yields a result', () => {
    const mockInput = '=';
    const mockMemory = {
      total: '5',
      next: '5',
      operation: '+',
    };
    expect(calculate(mockMemory, mockInput)).toStrictEqual({
      total: '10',
      next: null,
      operation: null,
    });
  });
});
