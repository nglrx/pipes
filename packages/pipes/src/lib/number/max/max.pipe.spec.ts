import { MaxPipe } from './max.pipe';

describe('MaxPipe', () => {
  let pipe: MaxPipe;

  const arr = [10, 45, 200, 5, 92];
  const maxOfArr = 200;
  const mixedArr = [30, 0, -99, -52, -9];
  const maxOfMixedArr = 30;
  const singleValueArr = [2];
  const maxOfSingleValueArr = 2
  const emptyArr = [];

  beforeEach(() => {
    pipe = new MaxPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find maximum from an array of numbers`, () => {
    expect(pipe.transform(...arr)).toEqual(maxOfArr);
  });

  it(`should find maximum from an array of both positive and negative numbers`, () => {
    expect(pipe.transform(...mixedArr)).toEqual(maxOfMixedArr);
  });

  it(`should find maximum from an array with single value`, () => {
    expect(pipe.transform(...singleValueArr)).toEqual(maxOfSingleValueArr);
  });

  it(`should return null for an empty array`, () => {
    expect(pipe.transform(...emptyArr)).toBeNull();
  });

  it(`should be null safe`, () => {
    expect(pipe.transform()).toBeNull();
  });

});
