import { SentenceCasePipe } from './sentence-case.pipe';

describe('SentenceCasePipe', () => {
  let pipe: SentenceCasePipe;

  beforeEach(() => {
    pipe = new SentenceCasePipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to sentence case`, () => {
    expect(pipe.transform('This IS a Test string!')).toEqual('This is a test string!');
  });

  it(`should convert a string with single character to sentence case`, () => {
    expect(pipe.transform('a')).toEqual('A');
  });

  it(`should convert a string with single word to sentence case`, () => {
    expect(pipe.transform('single')).toEqual('Single');
  });

  it(`should return same string for string starting with special char`, () => {
    expect(pipe.transform('$$$ is not converted.')).toEqual('$$$ is not converted.');
  });

  it(`should return empty string on converting an empty string to sentence case`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return same string on converting a white space string to sentence case`, () => {
    expect(pipe.transform('\t\n ')).toEqual('\t\n ');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
