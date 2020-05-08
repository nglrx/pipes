import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
  let pipe: CamelCasePipe;

  const str = 'This iS A TEST string';
  const strCamelCase = 'thisIsATestString';
  const sluggishStr = 'This IS another-tEst-_strinG';
  const sluggishStrCamelCase = 'thisIsAnotherTestString';
  const singleCharacterStr = 'A';
  const singleCharacterStrCamelCase = 'a';
  const singleWordStr = 'SiNGle';
  const singleWordStrCamelCase = 'single';
  const emptyStr = '';
  const whitespaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new CamelCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to camel case`, () => {
    expect(pipe.transform(str)).toEqual(strCamelCase);
  });

  it(`should convert a sluggish string to camel case`, () => {
    expect(pipe.transform(sluggishStr)).toEqual(sluggishStrCamelCase);
  });

  it(`should convert a string with single character to camel case`, () => {
    expect(pipe.transform(singleCharacterStr)).toEqual(singleCharacterStrCamelCase);
  });

  it(`should convert a string with single word to camel case`, () => {
    expect(pipe.transform(singleWordStr)).toEqual(singleWordStrCamelCase);
  });

  it(`should return empty string on converting an empty string to camel case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return empty string on converting a white space string to camel case`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(emptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
