import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  const str = ' This is a test string!  ';
  const trimmedStr = 'This is a test string!'
  const emptyStr = '';
  const whitespaceStr = '  \t \n  ';

  beforeEach(() => {
    pipe = new TrimPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string`, () => {
    expect(pipe.transform(str)).toEqual(trimmedStr);
  });

  it(`should return empty string on trimming an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return empty string on trimming a string with only whitespaces`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(emptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
