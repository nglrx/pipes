import { CharAtPipe } from './char-at.pipe';

describe('CharAtPipe', () => {
  let pipe: CharAtPipe;

  const str = 'This is a test string!';
  const position = 5;
  const charAtPosition = 'i';
  const charAtDefaultPosition = 'T';
  const invalidPosition = 50;
  const emptyStr = '';

  beforeEach(() => {
    pipe = new CharAtPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return the character at a position in string`, () => {
    expect(pipe.transform(str, position)).toEqual(charAtPosition);
  });

  it(`should return the character at default position i.e. 0 in string`, () => {
    expect(pipe.transform(str)).toEqual(charAtDefaultPosition);
  });

  it(`should return empty for invalid position in string`, () => {
    expect(pipe.transform(str, invalidPosition)).toEqual(emptyStr);
  });

  it(`should return empty for a position in an empty string`, () => {
    expect(pipe.transform(emptyStr, position)).toEqual(emptyStr);
  });

  it(`should return empty for invalid position in an empty string`, () => {
    expect(pipe.transform(emptyStr, invalidPosition)).toEqual(emptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
