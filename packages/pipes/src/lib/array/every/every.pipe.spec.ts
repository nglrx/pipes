import { EveryPipe } from './every.pipe';

describe('EveryPipe', () => {
  let pipe: EveryPipe;

  beforeEach(() => {
    pipe = new EveryPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should call callback function for every value in given array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], (n: string) => n !== '')).toEqual(true);
    expect(pipe.transform([10, 11, 12, 13, 14], (n: number) => n % 2 === 0)).toEqual(false);
  });

  it(`should return empty array for an empty array`, () => {
    expect(pipe.transform([], () => {})).toEqual(true);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, null)).toBeNull();
  });

});
