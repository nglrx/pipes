import { CombinePipe } from './combine.pipe';

describe('CombinePipe', () => {
  let pipe: CombinePipe;

  beforeEach(() => {
    pipe = new CombinePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should combine two arrays`, () => {
    expect(pipe.transform(['a', 'b', 'c'], ['d', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it(`should combine three arrays`, () => {
    expect(pipe.transform([1, 2], [3, 4], [5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it(`should return a copy of single array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it(`should combine single values with array`, () => {
    expect(pipe.transform(['a', 'b', 'c'], 'd', 'e')).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it(`should combine single values and arrays with array`, () => {
    expect(pipe.transform(['a', 'b'], 'c', ['d', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it(`should return empty array for an empty array`, () => {
    expect(pipe.transform([])).toEqual([]);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
