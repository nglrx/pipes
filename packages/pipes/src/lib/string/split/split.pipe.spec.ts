import { SplitPipe } from './split.pipe';

describe('SplitPipe', () => {
  let pipe: SplitPipe;

  const strWithDefaultDelimiter = 'This is a string!';
  const splitStrWithDefaultDelimiter = ['This', 'is', 'a', 'string!'];
  const limit = 3;
  const splitStrWithDefaultDelimiterAndLimit = ['This', 'is', 'a'];
  const strWithDelimiter = 'This-is-another string';
  const delimiter = '-';
  const splitStrWithDelimiter = ['This', 'is', 'another string'];
  const anotherStrWithDelimiter = '_Yet_another_string_';
  const anotherDelimiter = '_';
  const anotherLimit = 4;
  const splitAnotherStrWithDelimiter = ['', 'Yet', 'another', 'string'];
  const stringWithWhitespaceDelimiter = 'String  delimited\nwith\twhitespace \t\ncharacters'
  const whitespaceRegExp = new RegExp('\\s+');
  const splitStrWithRegExpDelimiter = ['String', 'delimited', 'with', 'whitespace', 'characters'];
  const emptyStr = '';
  const splitEmptyStr = [''];

  beforeEach(() => {
    pipe = new SplitPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should split a string using default delimiter`, () => {
    expect(pipe.transform(strWithDefaultDelimiter)).toEqual(splitStrWithDefaultDelimiter);
  });

  it(`should split a string using default delimiter and limit`, () => {
    expect(pipe.transform(strWithDefaultDelimiter, undefined, limit))
      .toEqual(splitStrWithDefaultDelimiterAndLimit);
  });

  it(`should split a string using specified delimiter`, () => {
    expect(pipe.transform(strWithDelimiter, delimiter)).toEqual(splitStrWithDelimiter)
  });

  it(`should split another string using specified delimiter and limit`, () => {
    expect(pipe.transform(anotherStrWithDelimiter, anotherDelimiter, anotherLimit))
      .toEqual(splitAnotherStrWithDelimiter);
  });

  it(`should split a string using whitespace RegExp as delimiter`, () => {
    expect(pipe.transform(stringWithWhitespaceDelimiter, whitespaceRegExp))
      .toEqual(splitStrWithRegExpDelimiter);
  });

  it(`should return empty on splitting an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(splitEmptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
