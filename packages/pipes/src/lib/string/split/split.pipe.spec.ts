import { SplitPipe } from './split.pipe';

describe('SplitPipe', () => {
  let pipe: SplitPipe;

  beforeEach(() => {
    pipe = new SplitPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should split a string using default delimiter`, () => {
    expect(pipe.transform('This is a string!')).toEqual(['This', 'is', 'a', 'string!']);
  });

  it(`should split a string using default delimiter and limit`, () => {
    expect(pipe.transform('This is a string!', undefined, 3))
      .toEqual(['This', 'is', 'a']);
  });

  it(`should split a string using specified delimiter`, () => {
    expect(pipe.transform('This-is-another string', '-'))
      .toEqual(['This', 'is', 'another string']);
  });

  it(`should split another string using specified delimiter and limit`, () => {
    expect(pipe.transform('_Yet_another_string_', '_', 4))
      .toEqual(['', 'Yet', 'another', 'string']);
  });

  it(`should split a string using whitespace RegExp as delimiter`, () => {
    expect(pipe.transform('String  delimited\nwith\twhitespace \t\ncharacters', new RegExp('\\s+')))
      .toEqual(['String', 'delimited', 'with', 'whitespace', 'characters']);
  });

  it(`should return empty on splitting an empty string`, () => {
    expect(pipe.transform('')).toEqual(['']);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
