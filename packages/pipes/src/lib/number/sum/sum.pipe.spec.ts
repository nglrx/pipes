import { SumPipe } from './sum.pipe';

describe('SumPipe', () => {
  let pipe: SumPipe;

  const arr = [10, 45, 200, 5, 92];
  const sumOfArr = 352;
  const mixedArr = [30, 0, -99, -52, -9];
  const sumOfMixedArr = -130;
  const singleValueArr = [2];
  const sumOfSingleValueArr = 2
  const emptyArr = [];

  beforeEach(() => {
    pipe = new SumPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find sum from an array of numbers`, () => {
    expect(pipe.transform(arr)).toEqual(sumOfArr);
  });

  it(`should find sum from an array of both positive and negative numbers`, () => {
    expect(pipe.transform(mixedArr)).toEqual(sumOfMixedArr);
  });

  it(`should find sum from an array with single value`, () => {
    expect(pipe.transform(singleValueArr)).toEqual(sumOfSingleValueArr);
  });

  it(`should return null for an empty array`, () => {
    expect(pipe.transform(emptyArr)).toBeNull();
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
