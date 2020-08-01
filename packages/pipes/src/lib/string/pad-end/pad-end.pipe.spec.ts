import { PadEndPipe } from './pad-end.pipe';

describe('PadEndPipe', () => {
  let pipe: PadEndPipe;

  beforeEach(() => {
    pipe = new PadEndPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should pad a string from right with default fill string`, () => {
    expect(pipe.transform('This is a test string!', 24)).toEqual('This is a test string!  ');
  });

  it(`should pad a string from right with specified fill string`, () => {
    expect(pipe.transform('This is a test string!', 29, '---'))
      .toEqual('This is a test string!-------');
  });

  it(`should return empty string on trimming an empty string from right`, () => {
    expect(pipe.transform('', 0, '//')).toEqual('');
  });

  it(`should return fill string on padding empty string from right with fill string`, () => {
    const fillStringSlashes = '//';
    expect(pipe.transform(fillStringSlashes, fillStringSlashes.length + 1, ''))
      .toEqual(fillStringSlashes);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, 1)).toBeNull();
  });

});
