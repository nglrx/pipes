import { CopyWithinPipe } from './copy-within.pipe';

describe('CopyWithinPipe', () => {
  let pipe: CopyWithinPipe;

  beforeEach(() => {
    pipe = new CopyWithinPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should copy within an array of strings`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], 0)).toEqual(['a', 'b', 'c', 'd', 'e']);
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], 2)).toEqual(['a', 'b', 'a', 'b', 'c']);
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], -2)).toEqual(['a', 'b', 'c', 'a', 'b']);
  });

  it(`should copy within an array of numbers from start`, () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 2, 1)).toEqual([1, 2, 2, 3, 4]);
    expect(pipe.transform([1, 2, 3, 4, 5], -3, 4)).toEqual([1, 2, 5, 4, 5]);
  });

  it(`should copy within an array of numbers till end`, () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 4, -2)).toEqual([1, 2, 3, 4, 4]);
    expect(pipe.transform([1, 2, 3, 4, 5], -5, 3)).toEqual([4, 5, 3, 4, 5]);
  });

  it(`should copy within an array of arrays from start till end`, () => {
    expect(pipe.transform([[1], [2], [3], [4], [5]], 2, 1, 3))
      .toEqual([[1], [2], [2], [3], [5]]);
    expect(pipe.transform([[1], [2], [3], [4], [5]], -2, -4, -1))
      .toEqual([[1], [2], [3], [2], [3]]);
  });

  it(`should fill/not fill an array with given value for invalid values of target, start or end`, () => {
    expect(pipe.transform([[1], [2], [3], [4], [5]], 2, 10, 4))
      .toEqual([[1], [2], [3], [4], [5]]);
    expect(pipe.transform([[1], [2], [3], [4], [5]], 3, -4, -20))
      .toEqual([[1], [2], [3], [4], [5]]);
    expect(pipe.transform([[1], [2], [3], [4], [5]], 30, 1, 4))
      .toEqual([[1], [2], [3], [4], [5]]);
    expect(pipe.transform([[1], [2], [3], [4], [5]], 3, -20, 20))
      .toEqual([[1], [2], [3], [1], [2]]);
  });

  it(`should return empty array for an empty array`, () => {
    expect(pipe.transform([], null)).toEqual([]);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, null)).toBeNull();
  });

});
