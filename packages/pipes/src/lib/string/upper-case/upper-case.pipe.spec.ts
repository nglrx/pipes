import { UpperCasePipe } from './upper-case.pipe';

describe('UpperCasePipe', () => {
  let pipe: UpperCasePipe;

  beforeEach(() => {
    pipe = new UpperCasePipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to upper case`, () => {
    expect(pipe.transform('This is A Test string!')).toEqual('THIS IS A TEST STRING!');
  });

  it(`should return empty string on converting an empty string to upper case`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return same string while converting special chars or numbers to upper case`, () => {
    expect(pipe.transform('~1@3$5^7*9)-')).toEqual('~1@3$5^7*9)-');
  });

  it(`should return same string on converting a white space string to upper case`, () => {
    expect(pipe.transform('\t\n ')).toEqual('\t\n ');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
