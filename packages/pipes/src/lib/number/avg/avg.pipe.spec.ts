import { AvgPipe } from './avg.pipe';

describe('AvgPipe', () => {
  let pipe: AvgPipe;

  const arr = [10, 45, 200, 5, 92];
  const avgOfArr = 70.4;
  const mixedArr = [30, 0, -99, -52, -9];
  const avgOfMixedArr = -26;
  const singleValueArr = [2];
  const avgOfSingleValueArr = 2
  const emptyArr = [];
  const avgOfEmptyArr = 0;
  const nanArray = [783, Infinity, NaN, 0, -391];
  const avgOfNanArray = NaN;

  beforeEach(() => {
    pipe = new AvgPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find avg from an array of numbers`, () => {
    expect(pipe.transform(arr)).toEqual(avgOfArr);
  });

  it(`should find avg from an array of both positive and negative numbers`, () => {
    expect(pipe.transform(mixedArr)).toEqual(avgOfMixedArr);
  });

  it(`should find avg from an array with single value`, () => {
    expect(pipe.transform(singleValueArr)).toEqual(avgOfSingleValueArr);
  });

  it(`should return 0 for an empty array`, () => {
    expect(pipe.transform(emptyArr)).toEqual(avgOfEmptyArr);
  });

  it('should return NaN if given array contains Infinity', () => {
    expect(pipe.transform(nanArray)).toEqual(avgOfNanArray);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
