import { FillPipe } from './fill.pipe';

describe('FillPipe', () => {
  let pipe: FillPipe;

  beforeEach(() => {
    pipe = new FillPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should fill an array of strings with given value`, () => {
    expect(pipe.transform(['a', 'b', 'c'], '-')).toEqual(['-', '-', '-']);
  });

  it(`should fill an array of numbers with given value from start`, () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 0, 2)).toEqual([1, 2, 0, 0, 0]);
    expect(pipe.transform([1, 2, 3, 4, 5], 0, -2)).toEqual([1, 2, 3, 0, 0]);
  });

  it(`should fill an array of numbers with given value till end`, () => {
    expect(pipe.transform([1, 2, 3, 4, 5], 0, undefined, 4)).toEqual([0, 0, 0, 0, 5]);
    expect(pipe.transform([1, 2, 3, 4, 5], 0, undefined, -4)).toEqual([0, 2, 3, 4, 5]);
  });

  it(`should fill an array of arrays with given value from start till end`, () => {
    expect(pipe.transform([[1], [2], [3], [4], [5]], [0], 2, 4))
      .toEqual([[1], [2], [0], [0], [5]]);
    expect(pipe.transform([[1], [2], [3], [4], [5]], [0], -4, -2))
      .toEqual([[1], [0], [0], [4], [5]]);
  });

  it(`should fill/not fill an array with given value for invalid values of start or end`, () => {
    expect(pipe.transform([[1], [2], [3], [4], [5]], [0], 10, 4))
      .toEqual([[1], [2], [3], [4], [5]]);
    expect(pipe.transform([[1], [2], [3], [4], [5]], [0], -4, -20))
      .toEqual([[1], [2], [3], [4], [5]]);
    expect(pipe.transform([[1], [2], [3], [4], [5]], [0], -20, 20))
      .toEqual([[0], [0], [0], [0], [0]]);
  });

  it(`should return empty array for an empty array`, () => {
    expect(pipe.transform([], null)).toEqual([]);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, null)).toBeNull();
  });

});
