import { SlugifyPipe } from './slugify.pipe';

describe('SlugifyPipe', () => {
  let pipe: SlugifyPipe;

  const str = 'this_-is__a__ test - string!';
  const sluggifiedStr = 'this-is-a-test-string'
  const separator = '_';
  const sluggifiedStrWithSeparator = 'this_is_a_test_string'
  const emptyStr = '';
  const whitespaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new SlugifyPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should slugify a string with default separator`, () => {
    expect(pipe.transform(str)).toEqual(sluggifiedStr);
  });

  it(`should slugify a string with specified separator`, () => {
    expect(pipe.transform(str, separator)).toEqual(sluggifiedStrWithSeparator);
  });

  it(`should return empty string on slugifying an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should return same string on slugifying a whitespace string`, () => {
    expect(pipe.transform(whitespaceStr)).toEqual(emptyStr);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
