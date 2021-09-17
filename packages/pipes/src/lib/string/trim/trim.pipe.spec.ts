import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  beforeEach(() => {
    pipe = new TrimPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string`, () => {
    expect(pipe.transform(' This is a test string!  ')).toEqual('This is a test string!');
  });

  it(`should return empty string on trimming an empty string`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return empty string on trimming a string with only whitespaces`, () => {
    expect(pipe.transform('  \t \n  ')).toEqual('');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
