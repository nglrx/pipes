import { TrimLeftPipe } from './trim-left.pipe';

describe('TrimLeftPipe', () => {
  let pipe: TrimLeftPipe;

  beforeEach(() => {
    pipe = new TrimLeftPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string from left`, () => {
    expect(pipe.transform(' This is a test string!  ')).toEqual('This is a test string!  ');
  });

  it(`should return empty string on trimming an empty string from left`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return empty string on trimming string with only whitespaces from left`, () => {
    expect(pipe.transform('  \t \n  ')).toEqual('');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
