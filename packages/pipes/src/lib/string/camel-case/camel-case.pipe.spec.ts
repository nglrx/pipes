import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
  let pipe: CamelCasePipe;

  beforeEach(() => {
    pipe = new CamelCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to camel case`, () => {
    expect(pipe.transform('This iS A TEST string')).toEqual('thisIsATestString');
  });

  it(`should convert a sluggish string to camel case`, () => {
    expect(pipe.transform('-This IS another-tEst-_strinG_')).toEqual('thisIsAnotherTestString');
  });

  it(`should convert a string with single character to camel case`, () => {
    expect(pipe.transform('A')).toEqual('a');
  });

  it(`should convert a string with single word to camel case`, () => {
    expect(pipe.transform('SiNGle')).toEqual('single');
  });

  it(`should return empty string on converting an empty string to camel case`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return empty string on converting a white space string to camel case`, () => {
    expect(pipe.transform('\t\n ')).toEqual('');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
