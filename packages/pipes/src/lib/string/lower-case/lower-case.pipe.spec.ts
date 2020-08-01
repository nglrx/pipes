import { LowerCasePipe } from './lower-case.pipe';

describe('LowerCasePipe', () => {
  let pipe: LowerCasePipe;

  beforeEach(() => {
    pipe = new LowerCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to lower case`, () => {
    expect(pipe.transform('This IS a Test string!')).toEqual('this is a test string!');
  });

  it(`should return empty string on converting an empty string to lower case`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return same string while converting special chars or numbers to lower case`, () => {
    expect(pipe.transform('~1@3$5^7*9)-')).toEqual('~1@3$5^7*9)-');
  });

  it(`should return same string on converting a white space string to lower case`, () => {
    expect(pipe.transform('\t\n ')).toEqual('\t\n ');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
