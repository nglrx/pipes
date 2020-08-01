import { SqrtPipe } from './sqrt.pipe';

describe('SqrtPipe', () => {
  let pipe: SqrtPipe;

  beforeEach(() => {
    pipe = new SqrtPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find square root of positive number`, () => {
    expect(pipe.transform(625)).toEqual(25);
  });

  it(`should return NaN for square root of negative number`, () => {
    expect(pipe.transform(-25)).toEqual(NaN);
  });

  it(`should find square root of decimal number`, () => {
    expect(pipe.transform(243.36)).toEqual(15.6);
  });

  it(`should return zero for square root value of zero`, () => {
    expect(pipe.transform(0)).toEqual(0);
  });

  it('should return NaN for square root value of NaN', () => {
    expect(pipe.transform(NaN)).toEqual(NaN);
  });

  it('should return Infinity for square root value of Infinity', () => {
    expect(pipe.transform(Infinity)).toEqual(Infinity);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(0);
  });

});
