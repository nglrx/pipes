import { LengthPipe } from './length.pipe';

describe('LengthPipe', () => {
  let pipe: LengthPipe;

  beforeEach(() => {
    pipe = new LengthPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find length of a string`, () => {
    expect(pipe.transform('This is a test string!')).toEqual(22);
  });

  it(`should find length of an empty string`, () => {
    expect(pipe.transform('')).toEqual(0);
  });

  it(`should find length of a number`, () => {
    expect(pipe.transform(-12345.67890)).toEqual(11);
  });

  it(`should find length of a boolean`, () => {
    expect(pipe.transform(true)).toEqual(4);
  });

  it(`should find length of an array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'])).toEqual(5);
  });

  it(`should find length of an empty array`, () => {
    expect(pipe.transform([])).toEqual(0);
  });

  it(`should return null for unsupported types Object, Date`, () => {
    expect(pipe.transform({ foo: 'bar' })).toBeNull();
    expect(pipe.transform(new Date())).toBeNull();
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
