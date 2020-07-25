import { LowerCasePipe } from './lower-case.pipe';

describe('LowerCasePipe', () => {
  let pipe: LowerCasePipe;

  const str = 'This IS a Test string!';
  const lowercaseStr = 'this is a test string!'
  const emptyStr = '';
  const whitespaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new LowerCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to lower case`, () => {
    expect(pipe.transform(str)).toEqual(lowercaseStr);
  });

  it(`should return empty string on converting an empty string to lower case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return same string on converting a white space string to lower case`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(whitespaceStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
