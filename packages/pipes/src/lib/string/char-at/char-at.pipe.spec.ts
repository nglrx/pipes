import { CharAtPipe } from './char-at.pipe';

describe('CharAtPipe', () => {
  let pipe: CharAtPipe;

  const str = ' test is running!  ';
  const emptyStr = '';
  const position = 5;
  const invalidPosition = 50;

  beforeEach(() => {
    pipe = new CharAtPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return the character at a position in string`, () => {
    expect(pipe.transform(str, position)).toEqual(str.charAt(position));
  });

  it(`should return the character at default position i.e. 0 in string`, () => {
    expect(pipe.transform(str)).toEqual(str.charAt(0));
  });

  it(`should return empty for invalid position in string`, () => {
    expect(pipe.transform(str, invalidPosition)).toEqual(str.charAt(invalidPosition));
  });

  it(`should return empty for a position in empty string`, () => {
    expect(pipe.transform(emptyStr, position)).toEqual(emptyStr.charAt(position));
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
