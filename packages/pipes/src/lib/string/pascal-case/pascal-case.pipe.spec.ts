import { PascalCasePipe } from './pascal-case.pipe';

describe('PascalCasePipe', () => {
  let pipe: PascalCasePipe;

  beforeEach(() => {
    pipe = new PascalCasePipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to pascal case`, () => {
    expect(pipe.transform('This iS A TEST string')).toEqual('ThisIsATestString');
  });

  it(`should convert a sluggish string to pascal case`, () => {
    expect(pipe.transform('-This IS another-tEst-_strinG_')).toEqual('ThisIsAnotherTestString');
  });

  it(`should convert a string with single character to pascal case`, () => {
    expect(pipe.transform('a')).toEqual('A');
  });

  it(`should convert a string with single word to pascal case`, () => {
    expect(pipe.transform('siNGle')).toEqual('Single');
  });

  it(`should return empty string on converting an empty string to pascal case`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return empty string on converting a white space string to pascal case`, () => {
    expect(pipe.transform('\t\n ')).toEqual('');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
