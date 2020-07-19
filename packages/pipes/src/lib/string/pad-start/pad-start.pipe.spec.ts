import { PadStartPipe } from './pad-start.pipe';

describe('PadStartPipe', () => {
  let pipe: PadStartPipe;

  const str = 'This is a test string!';
  const maxLengthOfStr = 25;
  const leftPaddedString = '   This is a test string!';
  const maxLengthOfStrWithFillString = 27;
  const fillString = '--'
  const leftPaddedStringWithFillString = '-----This is a test string!';
  const emptyStr = '';
  const fillStringSlashes = '//'

  beforeEach(() => {
    pipe = new PadStartPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should pad a string from left with default fill string`, () => {
    expect(pipe.transform(str, maxLengthOfStr)).toEqual(leftPaddedString);
  });

  it(`should pad a string from left with specified fill string`, () => {
    expect(pipe.transform(str, maxLengthOfStrWithFillString, fillString))
      .toEqual(leftPaddedStringWithFillString);
  });

  it(`should return empty string on trimming an empty string from left`, () => {
    expect(pipe.transform(emptyStr, 0, fillStringSlashes)).toEqual(emptyStr);
  });

  it(`should return fill string on padding empty string with fill string`, () => {
    expect(pipe.transform(fillStringSlashes, fillStringSlashes.length+1, emptyStr))
      .toEqual(fillStringSlashes);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, 1)).toBeNull();
  });

});
