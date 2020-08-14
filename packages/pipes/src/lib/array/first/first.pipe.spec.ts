import { FirstPipe } from './first.pipe';

describe('FirstPipe', () => {
  let pipe: FirstPipe;

  beforeEach(() => {
    pipe = new FirstPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return first element by default from given array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'])).toEqual(['a']);
  });

  it(`should return first 'n' elements specified by count from given array`, () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 2)).toEqual([1, 2]);
  });

  it(`should remove the last 'n' elements specified by negative count from given array`, () => {
    expect(pipe.transform([[1], [2], [3], [4], [5]], -2)).toEqual([[1], [2], [3]]);
  });

  it(`should return all elements from given array if count > length`, () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
  });

  it(`should return no elements from given array for zero count or count <= -length`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], 0)).toEqual([]);
    expect(pipe.transform([1, 2, 3, 4, 5], -5)).toEqual([]);
  });

  it(`should return empty array for an empty array`, () => {
    expect(pipe.transform([])).toEqual([]);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
