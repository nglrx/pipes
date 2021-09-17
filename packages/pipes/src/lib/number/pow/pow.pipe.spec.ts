import { PowPipe } from './pow.pipe';

describe('PowPipe', () => {
  let pipe: PowPipe;

  beforeEach(() => {
    pipe = new PowPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find value of base raised to exponent`, () => {
    expect(pipe.transform(4, 3)).toEqual(64);
    expect(pipe.transform(-5, 2)).toEqual(25);
    expect(pipe.transform(6.5, 2.1)).toEqual(50.946933504748095);
  });

  it(`should find value of base raised to default exponent`, () => {
    expect(pipe.transform(10)).toEqual(1);
    expect(pipe.transform(Infinity)).toEqual(1);
  });

  it(`should find value of base raised to Infinity or NaN`, () => {
    expect(pipe.transform(293, Infinity)).toEqual(Infinity);
    expect(pipe.transform(462, NaN)).toEqual(NaN);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(1);
  });

});
