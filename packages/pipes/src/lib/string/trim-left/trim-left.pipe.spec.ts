import { TrimLeftPipe } from './trim-left.pipe';

describe('TrimLeftPipe', () => {
  let pipe: TrimLeftPipe;

  const str = ' This is a test string!  ';
  const strTrimmedFromLeft = 'This is a test string!  '
  const emptyStr = '';
  const whitespaceStr = '  \t \n  ';

  beforeEach(() => {
    pipe = new TrimLeftPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string from left`, () => {
    expect(pipe.transform(str)).toEqual(strTrimmedFromLeft);
  });

  it(`should return empty string on trimming an empty string from left`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return empty string on trimming string with only whitespaces from left`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(emptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
