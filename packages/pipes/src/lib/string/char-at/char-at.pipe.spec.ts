import { CharAtPipe } from './char-at.pipe';

describe('CharAtPipe', () => {
  let pipe: CharAtPipe;

  beforeEach(() => {
    pipe = new CharAtPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return the character at a position in string`, () => {
    expect(pipe.transform('This is a test string!', 5)).toEqual('i');
  });

  it(`should return the character at default position i.e. 0 in string`, () => {
    expect(pipe.transform('This is a test string!')).toEqual('T');
  });

  it(`should return empty for invalid position in string`, () => {
    expect(pipe.transform('This is a test string!', -50)).toEqual('');
    expect(pipe.transform('This is a test string!', 50)).toEqual('');
  });

  it(`should return empty for any position in an empty string`, () => {
    expect(pipe.transform('', 0)).toEqual('');
    expect(pipe.transform('', -10)).toEqual('');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
