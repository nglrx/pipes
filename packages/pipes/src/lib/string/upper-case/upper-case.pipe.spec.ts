import { UpperCasePipe } from './upper-case.pipe';

describe('UpperCasePipe', () => {
  let pipe: UpperCasePipe;

  const str = 'test is running!';
  const emptyStr = '';
  const whiteSpaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new UpperCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to upper case`, () => {
    expect(pipe.transform(str)).toEqual(toUpperCase(str));
  });

  it(`should return empty string on converting an empty string to upper case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(toUpperCase(emptyStr));
  });

  it(`should return same string on converting an white space string to upper case`, () => {
    expect(pipe.transform(whiteSpaceStr)).toEqual(toUpperCase(whiteSpaceStr));
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

  function toUpperCase(value: string) {
    return value && value.toUpperCase();
  }

});
