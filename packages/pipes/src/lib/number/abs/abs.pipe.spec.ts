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
  const infinity = Infinity;
  const nan = NaN;

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
    expect(pipe.transform(zero)).toEqual(zero);
  });

  it('should return NaN for absolute value of NaN', () => {
    expect(pipe.transform(nan)).toEqual(nan);
  });

  it('should return Infinity for absolute value of Infinity', () => {
    expect(pipe.transform(infinity)).toEqual(infinity);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(zero);
  });

});
