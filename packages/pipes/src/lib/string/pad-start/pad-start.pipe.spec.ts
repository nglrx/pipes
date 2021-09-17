import { PadStartPipe } from './pad-start.pipe';

describe('PadStartPipe', () => {
  let pipe: PadStartPipe;

  beforeEach(() => {
    pipe = new PadStartPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should pad a string from left with default fill string`, () => {
    expect(pipe.transform('This is a test string!', 25))
      .toEqual('   This is a test string!');
  });

  it(`should pad a string from left with specified fill string`, () => {
    expect(pipe.transform('This is a test string!', 27, '--'))
      .toEqual('-----This is a test string!');
  });

  it(`should return empty string on trimming an empty string from left`, () => {
    expect(pipe.transform('', 0, '//')).toEqual('');
  });

  it(`should return fill string on padding empty string from left with fill string`, () => {
    const fillStringSlashes = '//';
    expect(pipe.transform(fillStringSlashes, fillStringSlashes.length+1, ''))
      .toEqual(fillStringSlashes);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, 1)).toBeNull();
  });

});
