import { MinPipe } from './min.pipe';

describe('MinPipe', () => {
  let pipe: MinPipe;

  beforeEach(() => {
    pipe = new MinPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find minimum from an array of numbers`, () => {
    expect(pipe.transform([10, 45, 200, 5, 92])).toEqual(5);
  });

  it(`should find minimum from an array of both positive and negative numbers`, () => {
    expect(pipe.transform([30, 0, -99, -52, -9])).toEqual(-99);
  });

  it(`should find minimum from an array with single value`, () => {
    expect(pipe.transform([5])).toEqual(5);
  });

  it(`should return null for an empty array`, () => {
    expect(pipe.transform([])).toBeNull();
  });

  it(`should return NaN if given array contains Infinity`, () => {
    expect(pipe.transform([793, Infinity, NaN, 0, -391])).toEqual(NaN);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
