import { PascalCasePipe } from './pascal-case.pipe';

describe('PascalCasePipe', () => {
  let pipe: PascalCasePipe;

  const str = 'test iS ruNNing';
  const strPascalCase = 'TestIsRunning';
  const sluggishStr = 'this tEst-IS_runninG';
  const sluggishStrPascalCase = 'ThisTestIsRunning';
  const singleCharacterStr = 'a';
  const singleCharacterStrPascalCase = 'A';
  const singleWordStr = 'siNGle';
  const singleWordStrPascalCase = 'Single';
  const emptyStr = '';

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

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
