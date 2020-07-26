import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  let pipe: TitleCasePipe;

  const str = 'this IS a tEST string!';
  const titleCaseStr = 'This Is A Test String!'
  const sluggishStr = 'this-is-a-test-string';
  const separator = '\-';
  const titleCaseSluggishStr = 'This-Is-A-Test-String';
  const exclusions = [ 'is', 'a' ]
  const titleCaseStrWithExclusions = 'This is a Test String!'
  const titleCaseSluggishStrWithExclusions = 'This-is-a-Test-String';
  const singleCharStr = 'a';
  const titleCaseSingleCharStr = 'A'
  const singleWordStr = 'single';
  const titleCaseSingleWordStr = 'Single';
  const specialCharStr = '*** |s ^ot @onverted.';
  const emptyStr = '';
  const whitespaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new TitleCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to title case`, () => {
    expect(pipe.transform(str)).toEqual(titleCaseStr);
  });

  it(`should convert a string to title case with separator`, () => {
    expect(pipe.transform(sluggishStr, separator)).toEqual(titleCaseSluggishStr);
  });

  it(`should convert a string to title case with exclusions`, () => {
    expect(pipe.transform(str, undefined, exclusions)).toEqual(titleCaseStrWithExclusions);
  });

  it(`should convert a string to title case with separator and exclusions`, () => {
    expect(pipe.transform(sluggishStr, separator, exclusions)).toEqual(titleCaseSluggishStrWithExclusions);
  });

  it(`should convert a string with single character to title case`, () => {
    expect(pipe.transform(singleCharStr)).toEqual(titleCaseSingleCharStr);
  });

  it(`should convert a string with single word to title case`, () => {
    expect(pipe.transform(singleWordStr)).toEqual(titleCaseSingleWordStr);
  });

  it(`should return same string on converting a string with all words starting with special character to title case`, () => {
    expect(pipe.transform(specialCharStr)).toEqual(specialCharStr);
  });

  it(`should return empty string on converting an empty string to title case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return same string on converting a white space string to title case`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(whitespaceStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
