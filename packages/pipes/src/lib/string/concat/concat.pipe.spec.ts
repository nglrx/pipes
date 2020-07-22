import { ConcatPipe } from './concat.pipe';

describe('ConcatPipe', () => {
  let pipe: ConcatPipe;

  const str = 'This is ';
  const anotherStr = 'a string!';
  const concatenatedStr = 'This is a string!';
  const tabString = '\t';
  const concatenatedStrWithTab = 'This is \t';
  const emptyStr = '';
  const multipleConcatenatedStrings = 'This is \ta string!';

  beforeEach(() => {
    pipe = new ConcatPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should concatenate a given string to current string`, () => {
    expect(pipe.transform(str, anotherStr)).toEqual(concatenatedStr);
  });

  it(`should concatenate a given string to string with non-printable characters`, () => {
    expect(pipe.transform(str, tabString)).toEqual(concatenatedStrWithTab);
  });

  it(`should return same string on concatenating with an empty string`, () => {
    expect(pipe.transform(str, emptyStr)).toEqual(str);
  });

  it(`should concatenate multiple strings to a string`, () => {
    expect(pipe.transform(str, tabString, anotherStr, emptyStr)).toEqual(multipleConcatenatedStrings);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
