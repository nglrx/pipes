import { PascalCasePipe } from './pascal-case.pipe';

describe('PascalCasePipe', () => {
  let pipe: PascalCasePipe;

  const str = 'This iS A TEST string';
  const strPascalCase = 'ThisIsATestString';
  const sluggishStr = '-This IS another-tEst-_strinG_';
  const sluggishStrPascalCase = 'ThisIsAnotherTestString';
  const singleCharacterStr = 'a';
  const singleCharacterStrPascalCase = 'A';
  const singleWordStr = 'siNGle';
  const singleWordStrPascalCase = 'Single';
  const emptyStr = '';
  const whitespaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new PascalCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to pascal case`, () => {
    expect(pipe.transform(str)).toEqual(strPascalCase);
  });

  it(`should convert a sluggish string to pascal case`, () => {
    expect(pipe.transform(sluggishStr)).toEqual(sluggishStrPascalCase);
  });

  it(`should convert a string with single character to pascal case`, () => {
    expect(pipe.transform(singleCharacterStr)).toEqual(singleCharacterStrPascalCase);
  });

  it(`should convert a string with single word to pascal case`, () => {
    expect(pipe.transform(singleWordStr)).toEqual(singleWordStrPascalCase);
  });

  it(`should return empty string on converting an empty string to pascal case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return empty string on converting a white space string to pascal case`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(emptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
