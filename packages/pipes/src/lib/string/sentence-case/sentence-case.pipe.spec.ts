import { SentenceCasePipe } from './sentence-case.pipe';

describe('SentenceCasePipe', () => {
  let pipe: SentenceCasePipe;

  const str = 'This IS a Test string!';
  const sentenceCaseStr = 'This is a test string!'
  const singleCharStr = 'a';
  const sentenceCaseSingleCharStr = 'A'
  const singleWordStr = 'single';
  const sentenceCaseSingleWordStr = 'Single';
  const specialCharStr = '*** is not converted.';
  const emptyStr = '';
  const whitespaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new SentenceCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to sentence case`, () => {
    expect(pipe.transform(str)).toEqual(sentenceCaseStr);
  });

  it(`should convert a string with single character to sentence case`, () => {
    expect(pipe.transform(singleCharStr)).toEqual(sentenceCaseSingleCharStr);
  });

  it(`should convert a string with single word to sentence case`, () => {
    expect(pipe.transform(singleWordStr)).toEqual(sentenceCaseSingleWordStr);
  });

  it(`should return same string on converting a string starting with special character to sentence case`, () => {
    expect(pipe.transform(specialCharStr)).toEqual(specialCharStr);
  });

  it(`should return empty string on converting an empty string to sentence case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return same string on converting a white space string to sentence case`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(whitespaceStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
