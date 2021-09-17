import { TrimRightPipe } from './trim-right.pipe';

describe('TrimRightPipe', () => {
  let pipe: TrimRightPipe;

  beforeEach(() => {
    pipe = new TrimRightPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string from left`, () => {
    expect(pipe.transform(' This is a test string!  ')).toEqual(' This is a test string!');
  });

  it(`should return empty string on trimming an empty string from right`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return empty string on trimming string with only whitespaces from right`, () => {
    expect(pipe.transform('  \t \n  ')).toEqual('');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
