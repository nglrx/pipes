import { EveryPipe } from './every.pipe';

describe('EveryPipe', () => {
  let pipe: EveryPipe;

  beforeEach(() => {
    pipe = new EveryPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return result after invoking callback function for every value in given array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], (n: string) => n !== '')).toBeTruthy();
    expect(pipe.transform([10, 11, 12, 13, 14], (n: number) => n % 2 === 0)).toBeFalsy();
  });

  it(`should return true for an empty array`, () => {
    expect(pipe.transform([], () => {})).toBeTruthy();
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, null)).toBeNull();
  });

});
