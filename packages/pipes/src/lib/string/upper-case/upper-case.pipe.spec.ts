import { UpperCasePipe } from './upper-case.pipe';

describe('UpperCasePipe', () => {
  let pipe: UpperCasePipe;

  const str = 'This is A Test string!';
  const uppercaseStr = 'THIS IS A TEST STRING!'
  const emptyStr = '';
  const whitespaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new UpperCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to upper case`, () => {
    expect(pipe.transform(str)).toEqual(uppercaseStr);
  });

  it(`should return empty string on converting an empty string to upper case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return same string on converting a white space string to upper case`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(whitespaceStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
