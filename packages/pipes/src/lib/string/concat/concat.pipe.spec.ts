import { ConcatPipe } from './concat.pipe';

describe('ConcatPipe', () => {
  let pipe: ConcatPipe;

  beforeEach(() => {
    pipe = new ConcatPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should concatenate a given string to current string`, () => {
    expect(pipe.transform('This is ', 'a string!')).toEqual('This is a string!');
  });

  it(`should concatenate a given string with non-printable characters`, () => {
    expect(pipe.transform('This is ', '\t')).toEqual('This is \t');
  });

  it(`should return same string on concatenating with an empty string`, () => {
    expect(pipe.transform('This is ', '')).toEqual('This is ');
  });

  it(`should concatenate multiple strings to a string`, () => {
    expect(pipe.transform('This is ', '\t', 'a string!', ''))
      .toEqual('This is \ta string!');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
