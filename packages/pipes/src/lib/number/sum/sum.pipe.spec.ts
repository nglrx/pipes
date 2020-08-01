import { SumPipe } from './sum.pipe';

describe('SumPipe', () => {
  let pipe: SumPipe;

  beforeEach(() => {
    pipe = new SumPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find sum from an array of numbers`, () => {
    expect(pipe.transform([10, 45, 200, 5, 92])).toEqual(352);
  });

  it(`should find sum from an array of both positive and negative numbers`, () => {
    expect(pipe.transform([30, 0, -99, -52, -9])).toEqual(-130);
  });

  it(`should find sum from an array with single value`, () => {
    expect(pipe.transform([8])).toEqual(8);
  });

  it(`should return 0 for an empty array`, () => {
    expect(pipe.transform([])).toEqual(0);
  });

  it('should return NaN if given array contains Infinity', () => {
    expect(pipe.transform([783, Infinity, NaN, 0, -391])).toEqual(NaN);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
