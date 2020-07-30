import { AvgPipe } from './avg.pipe';

describe('AvgPipe', () => {
  let pipe: AvgPipe;

  beforeEach(() => {
    pipe = new AvgPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find avg from an array of numbers`, () => {
    expect(pipe.transform([10, 45, 200, 5, 92])).toEqual(70.4);
  });

  it(`should find avg from an array of both positive and negative numbers`, () => {
    expect(pipe.transform([30, 0, -99, -52, -9])).toEqual(-26);
  });

  it(`should find avg from an array with single value`, () => {
    expect(pipe.transform([7])).toEqual(7);
  });

  it(`should return 0 for an empty array`, () => {
    expect(pipe.transform([])).toEqual(0);
  });

  it('should return NaN if given array contains Infinity', () => {
    expect(pipe.transform([872, Infinity, NaN, 0, -693])).toEqual(NaN);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
