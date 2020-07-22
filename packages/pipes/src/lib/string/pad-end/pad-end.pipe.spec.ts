import { PadEndPipe } from './pad-end.pipe';

describe('PadEndPipe', () => {
  let pipe: PadEndPipe;

  const str = 'This is a test string!';
  const maxLengthOfStr = 24;
  const leftPaddedString = 'This is a test string!  ';
  const maxLengthOfStrWithFillString = 29;
  const fillString = '---'
  const leftPaddedStringWithFillString = 'This is a test string!-------';
  const emptyStr = '';
  const fillStringSlashes = '//'

  beforeEach(() => {
    pipe = new PadEndPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should pad a string from right with default fill string`, () => {
    expect(pipe.transform(str, maxLengthOfStr)).toEqual(leftPaddedString);
  });

  it(`should pad a string from right with specified fill string`, () => {
    expect(pipe.transform(str, maxLengthOfStrWithFillString, fillString))
      .toEqual(leftPaddedStringWithFillString);
  });

  it(`should return empty string on trimming an empty string from right`, () => {
    expect(pipe.transform(emptyStr, 0, fillStringSlashes)).toEqual(emptyStr);
  });

  it(`should return fill string on padding empty string from right with fill string`, () => {
    expect(pipe.transform(fillStringSlashes, fillStringSlashes.length+1, emptyStr))
      .toEqual(fillStringSlashes);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, 1)).toBeNull();
  });

});
