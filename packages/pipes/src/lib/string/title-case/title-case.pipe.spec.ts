import { TitleCasePipe } from './title-case.pipe';
import { StringUtils } from '../../utils/string-utils';

describe('TitleCasePipe', () => {
  let pipe: TitleCasePipe;

  const str = 'test is running!';
  const singleCharacterStr = 'a';
  const singleWordStr = 'single';
  const specialCharStr = '*** is converted.';
  const emptyStr = '';
  const whiteSpaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new TitleCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to title case`, () => {
    expect(pipe.transform(str)).toEqual(StringUtils.toTitleCase(str));
  });

  it(`should convert a string with single character to title case`, () => {
    expect(pipe.transform(singleCharacterStr)).toEqual(StringUtils.toTitleCase(singleCharacterStr));
  });

  it(`should convert a string with single word to title case`, () => {
    expect(pipe.transform(singleWordStr)).toEqual(StringUtils.toTitleCase(singleWordStr));
  });

  it(`should convert a string having words starting with special character to title case`, () => {
    expect(pipe.transform(specialCharStr)).toEqual(StringUtils.toTitleCase(specialCharStr));
  });

  it(`should return empty string on converting an empty string to title case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(StringUtils.toTitleCase(emptyStr));
  });

  it(`should return same string on converting a white space string to title case`, () => {
    expect(pipe.transform(whiteSpaceStr)).toEqual(StringUtils.toTitleCase(whiteSpaceStr));
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
