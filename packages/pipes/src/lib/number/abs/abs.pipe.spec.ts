import { AbsPipe } from './abs.pipe';

describe('AbsPipe', () => {
  let pipe: AbsPipe;

  beforeEach(() => {
    pipe = new AbsPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find absolute of positive number`, () => {
    expect(pipe.transform(394)).toEqual(394);
  });

  it(`should find absolute of negative number`, () => {
    expect(pipe.transform(-247)).toEqual(247);
  });

  it(`should find absolute of decimal number`, () => {
    expect(pipe.transform(-459.1386)).toEqual(459.1386);
  });

  it(`should return zero for absolute value of zero`, () => {
    expect(pipe.transform(0)).toEqual(0);
  });

  it(`should return NaN for absolute value of NaN`, () => {
    expect(pipe.transform(NaN)).toEqual(NaN);
  });

  it(`should return Infinity for absolute value of Infinity`, () => {
    expect(pipe.transform(Infinity)).toEqual(Infinity);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(0);
  });

});
