import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
  let pipe: CamelCasePipe;

  const str = 'test is running';
  const strCamelCase = 'testIsRunning';
  const sluggishStr = 'This tEst-IS_runninG';
  const sluggishStrCamelCase = 'thisTestIsRunning';
  const singleCharacterStr = 'a';
  const singleWordStr = 'Single';
  const singleWordStrCamelCase = 'single';
  const emptyStr = '';

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
    expect(pipe.transform(singleCharacterStr)).toEqual(singleCharacterStr);
  });

  it(`should convert a string with single word to camel case`, () => {
    expect(pipe.transform(singleWordStr)).toEqual(singleWordStrCamelCase);
  });

  it(`should return empty string on converting an empty string to camel case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
