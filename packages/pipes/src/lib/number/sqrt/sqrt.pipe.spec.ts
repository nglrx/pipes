import { SqrtPipe } from './sqrt.pipe';

describe('SqrtPipe', () => {
  let pipe: SqrtPipe;

  const positiveNum = 625;
  const sqrtOfPositiveNum = 25;
  const negativeNum = -25;
  const decimalNum = 243.36;
  const sqrtOfDecimalNum = 15.6;
  const zero = 0;
  const infinity = Infinity;
  const nan = NaN;

  beforeEach(() => {
    pipe = new SqrtPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find square root of positive number`, () => {
    expect(pipe.transform(positiveNum)).toEqual(sqrtOfPositiveNum);
  });

  it(`should return NaN for square root of negative number`, () => {
    expect(pipe.transform(negativeNum)).toEqual(nan);
  });

  it(`should find square root of decimal number`, () => {
    expect(pipe.transform(decimalNum)).toEqual(sqrtOfDecimalNum);
  });

  it(`should return zero for square root value of zero`, () => {
    expect(pipe.transform(zero)).toEqual(zero);
  });

  it('should return NaN for square root value of NaN', () => {
    expect(pipe.transform(nan)).toEqual(nan);
  });

  it('should return Infinity for square root value of Infinity', () => {
    expect(pipe.transform(infinity)).toEqual(infinity);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(zero);
  });

});
