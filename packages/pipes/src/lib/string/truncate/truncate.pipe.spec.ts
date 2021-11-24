import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should truncate a string using specified length and default suffix`, () => {
    expect(pipe.transform('This is a test string!', 14)).toEqual('This is a test...');
  });

  it(`should truncate a string using specified length and suffix`, () => {
    expect(pipe.transform('This is a test string!', 14, '.....')).toEqual('This is a test.....');
  });

  it(`should truncate a string using specified length while preserving words`, () => {
    expect(pipe.transform('This is a test string!', 13, '..', true)).toEqual('This is a test..');
    expect(pipe.transform('This is a test string!', 15, undefined, true)).toEqual('This is a test string!');
  });

  it(`should not truncate a string when specified length >= length of string`, () => {
    const str = 'This is a test string!';
    expect(pipe.transform(str, 22)).toEqual(str);
    expect(pipe.transform(str, 50)).toEqual(str);
  });

  it(`should truncate a string using specified length and empty suffix`, () => {
    expect(pipe.transform('This is a test string!', 14, '')).toEqual('This is a test');
  });

  it(`should return empty on truncating an empty string and default/empty suffix`, () => {
    expect(pipe.transform('', 5)).toEqual('');
    expect(pipe.transform('', 5, '')).toEqual('');
  });

  it(`should throw error if length is less than 1`, () => {
    expect(() => pipe.transform('This is a test string!', -1)).toThrow(
      new Error(`Value of argument 'length' should be >= 1.`)
    );
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, 10)).toBeNull();
    expect(pipe.transform(null, 10, null)).toBeNull();
  });

});
