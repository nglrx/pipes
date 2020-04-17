import { SentenceCasePipe } from './sentence-case.pipe';
import { StringUtils } from '../../utils/string-utils';

describe('SentenceCasePipe', () => {
  let pipe: SentenceCasePipe;

  const str = 'test is running!';
  const singleCharacterStr = 'a';
  const singleWordStr = 'single';
  const specialCharStr = '*** is not converted.';
  const emptyStr = '';
  const whiteSpaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new SentenceCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to sentence case`, () => {
    expect(pipe.transform(str)).toEqual(StringUtils.toSentenceCase(str));
  });

  it(`should convert a string with single character to sentence case`, () => {
    expect(pipe.transform(singleCharacterStr)).toEqual(StringUtils.toSentenceCase(singleCharacterStr));
  });

  it(`should convert a string with single word to sentence case`, () => {
    expect(pipe.transform(singleWordStr)).toEqual(StringUtils.toSentenceCase(singleWordStr));
  });

  it(`should return same string on converting a string starting with special character to sentence case`, () => {
    expect(pipe.transform(specialCharStr)).toEqual(StringUtils.toSentenceCase(specialCharStr));
  });

  it(`should return empty string on converting an empty string to sentence case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(StringUtils.toSentenceCase(emptyStr));
  });

  it(`should return same string on converting a white space string to sentence case`, () => {
    expect(pipe.transform(whiteSpaceStr)).toEqual(StringUtils.toSentenceCase(whiteSpaceStr));
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
