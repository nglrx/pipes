import { PctPipe } from './pct.pipe';

describe('PctPipe', () => {
  let pipe: PctPipe;

  beforeEach(() => {
    pipe = new PctPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find percentage of a number of given total`, () => {
    expect(pipe.transform(4, 64)).toEqual(6.25);
  });

  it(`should find percentage of a number of default total`, () => {
    expect(pipe.transform(60)).toEqual(60);
  });

  it(`should find percentage of a number of given total and decimal places`, () => {
    expect(pipe.transform(25, 483, 2)).toEqual(5.18);
  });

  it(`should find percentage of a negative number of given total`, () => {
    expect(pipe.transform(-4, 64)).toEqual(-6.25);
  });

  it(`should find percentage of a decimal number of given total`, () => {
    expect(pipe.transform(8.4, 8400)).toEqual(0.1);
  });

  it(`should return zero for percentage of zero`, () => {
    expect(pipe.transform(0)).toEqual(0);
  });

  it(`should return NaN for percentage of NaN`, () => {
    expect(pipe.transform(NaN)).toEqual(NaN);
  });

  it(`should return Infinity for percentage of Infinity`, () => {
    expect(pipe.transform(Infinity)).toEqual(Infinity);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(0);
  });

});
