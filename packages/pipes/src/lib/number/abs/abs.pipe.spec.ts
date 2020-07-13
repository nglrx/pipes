import { AbsPipe } from './abs.pipe';

describe('AbsPipe', () => {
  let pipe: AbsPipe;

  const positiveNum = 394;
  const absOfPositiveNum = 394;
  const negativeNum = -244;
  const absOfNegativeNum = 244;
  const decimalNum = -459.1386;
  const absOfDecimalNum = 459.1386;
  const zero = 0;
  const absOfZero = 0;

  beforeEach(() => {
    pipe = new AbsPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find absolute of positive number`, () => {
    expect(pipe.transform(positiveNum)).toEqual(absOfPositiveNum);
  });

  it(`should find absolute of negative number`, () => {
    expect(pipe.transform(negativeNum)).toEqual(absOfNegativeNum);
  });

  it(`should find absolute of decimal number`, () => {
    expect(pipe.transform(decimalNum)).toEqual(absOfDecimalNum);
  });

  it(`should return zero for absolute value of zero`, () => {
    expect(pipe.transform(zero)).toEqual(absOfZero);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(0);
  });

});
