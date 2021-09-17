import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  let pipe: TitleCasePipe;

  beforeEach(() => {
    pipe = new TitleCasePipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to title case`, () => {
    expect(pipe.transform('this IS a tEST string!')).toEqual('This Is A Test String!');
  });

  it(`should convert a string to title case with separator`, () => {
    expect(pipe.transform('this-is-a-test-string', '\-')).toEqual('This-Is-A-Test-String');
  });

  it(`should convert a string to title case with exclusions`, () => {
    expect(pipe.transform('this IS a tEST string!', undefined, [ 'is', 'a' ]))
      .toEqual('This is a Test String!');
  });

  it(`should convert a string to title case with separator and exclusions`, () => {
    expect(pipe.transform('this-is-a-test-string', '\-', [ 'is', 'a' ]))
      .toEqual('This-is-a-Test-String');
  });

  it(`should convert a string with single character to title case`, () => {
    expect(pipe.transform('a')).toEqual('A');
  });

  it(`should convert a string with single word to title case`, () => {
    expect(pipe.transform('single')).toEqual('Single');
  });

  it(`should return same string for string with all words starting with special char`, () => {
    expect(pipe.transform('$$$ |s ^ot @onverted.')).toEqual('$$$ |s ^ot @onverted.');
  });

  it(`should return empty string on converting an empty string to title case`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return same string on converting a white space string to title case`, () => {
    expect(pipe.transform('\t\n ')).toEqual('\t\n ');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
