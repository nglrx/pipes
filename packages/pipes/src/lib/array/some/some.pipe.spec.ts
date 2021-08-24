import { SomePipe } from './some.pipe';

describe('SomePipe', () => {
  let pipe: SomePipe;

  beforeEach(() => {
    pipe = new SomePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return result after invoking callback function for some values in given array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], (n: string) => n === '')).toBeFalsy();
    expect(pipe.transform([10, 11, 12, 13, 14], (n: number) => n % 2 === 0)).toBeTruthy();
  });

  it(`should return true for an empty array`, () => {
    expect(pipe.transform([], () => {
      // Empty function
    })).toBeFalsy();
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, null)).toBeNull();
  });

});
