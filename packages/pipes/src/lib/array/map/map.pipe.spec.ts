import { MapPipe } from './map.pipe';

describe('MapPipe', () => {
  let pipe: MapPipe;

  beforeEach(() => {
    pipe = new MapPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should call callback function for every value in given array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], (n: string) => n.toUpperCase()))
      .toEqual(['A', 'B', 'C', 'D', 'E']);
    expect(pipe.transform([1, 2, 3, 4, 5], (n: number) => n * n))
      .toEqual([1, 4, 9, 16, 25]);
  });

  it(`should return empty array for an empty array`, () => {
    expect(pipe.transform([], () => {
      // Empty function
    })).toEqual([]);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, null)).toBeNull();
  });

});
