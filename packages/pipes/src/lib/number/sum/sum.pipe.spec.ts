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
  const sumOfEmptyArr = 0;
  const nanArray = [783, Infinity, NaN, 0, -391];
  const sumOfNanArray = NaN;

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

  it(`should return 0 for an empty array`, () => {
    expect(pipe.transform(emptyArr)).toEqual(sumOfEmptyArr);
  });

  it('should return NaN if given array contains Infinity', () => {
    expect(pipe.transform(nanArray)).toEqual(sumOfNanArray);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
