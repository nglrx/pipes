import {CeilPipe} from './ceil.pipe';

describe('CeilPipe', () => {
  let pipe: CeilPipe;

  beforeEach(() => {
    pipe = new CeilPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should round up positive number`, () => {
    expect(pipe.transform(1234.56)).toEqual(1235);
    expect(pipe.transform(1234.56789, 3)).toEqual(1234.568);
    expect(pipe.transform(9876.54321, 3)).toEqual(9876.544);
  });

  it(`should round up negative number`, () => {
    expect(pipe.transform(-1234.56)).toEqual(-1234);
    expect(pipe.transform(-1234.56789, 3)).toEqual(-1234.567);
    expect(pipe.transform(-9876.54321, 3)).toEqual(-9876.543);
  });

  it(`should return zero for round up of zero`, () => {
    expect(pipe.transform(0)).toEqual(0);
  });

  it(`should return NaN for round up of NaN`, () => {
    expect(pipe.transform(NaN)).toEqual(NaN);
  });

  it(`should return Infinity for round up of Infinity`, () => {
    expect(pipe.transform(Infinity)).toEqual(Infinity);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(0);
  });

});
