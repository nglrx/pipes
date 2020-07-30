import { MaxPipe } from './max.pipe';

describe('MaxPipe', () => {
  let pipe: MaxPipe;

  beforeEach(() => {
    pipe = new MaxPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find maximum from an array of numbers`, () => {
    expect(pipe.transform([10, 45, 200, 5, 92])).toEqual(200);
  });

  it(`should find maximum from an array of both positive and negative numbers`, () => {
    expect(pipe.transform([30, 0, -99, -52, -9])).toEqual(30);
  });

  it(`should find maximum from an array with single value`, () => {
    expect(pipe.transform([2])).toEqual(2);
  });

  it(`should return null for an empty array`, () => {
    expect(pipe.transform([])).toBeNull();
  });

  it('should return NaN if given array contains Infinity', () => {
    expect(pipe.transform([783, Infinity, NaN, 0, -391])).toEqual(NaN);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
