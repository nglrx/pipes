import { MinPipe } from './min.pipe';

describe('MinPipe', () => {
  let pipe: MinPipe;

  const arr = [10, 45, 200, 5, 92];
  const minOfArr = 5;
  const mixedArr = [30, 0, -99, -52, -9];
  const minOfMixedArr = -99;
  const singleValueArr = [2];
  const minOfSingleValueArr = 2
  const emptyArr = [];

  beforeEach(() => {
    pipe = new MinPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find minimum from an array of numbers`, () => {
    expect(pipe.transform(...arr)).toEqual(minOfArr);
  });

  it(`should find minimum from an array of both positive and negative numbers`, () => {
    expect(pipe.transform(...mixedArr)).toEqual(minOfMixedArr);
  });

  it(`should find minimum from an array with single value`, () => {
    expect(pipe.transform(...singleValueArr)).toEqual(minOfSingleValueArr);
  });

  it(`should return null for an empty array`, () => {
    expect(pipe.transform(...emptyArr)).toBeNull();
  });

  it(`should be null safe`, () => {
    expect(pipe.transform()).toBeNull();
  });

});
