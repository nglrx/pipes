import { TrimRightPipe } from './trim-right.pipe';

describe('TrimRightPipe', () => {
  let pipe: TrimRightPipe;

  const str = ' This is a test string!  ';
  const strTrimmedFromRight = ' This is a test string!'
  const emptyStr = '';
  const whitespaceStr = '  \t \n  ';

  beforeEach(() => {
    pipe = new TrimRightPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string from left`, () => {
    expect(pipe.transform(str)).toEqual(strTrimmedFromRight);
  });

  it(`should return empty string on trimming an empty string from right`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return empty string on trimming string with only whitespaces from right`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(emptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
