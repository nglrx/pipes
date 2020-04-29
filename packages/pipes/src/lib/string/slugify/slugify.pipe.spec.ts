import { SlugifyPipe } from './slugify.pipe';
import { StringUtils } from '../../utils/string-utils';

describe('SlugifyPipe', () => {
  let pipe: SlugifyPipe;

  const str = 'test_-is__always - running!';
  const separator = '_';
  const emptyStr = '';
  const whiteSpaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new SlugifyPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should slugify a string with default separator`, () => {
    expect(pipe.transform(str)).toEqual(StringUtils.slugify(str));
  });

  it(`should slugify a string with specified separator`, () => {
    expect(pipe.transform(str, separator)).toEqual(StringUtils.slugify(str, separator));
  });

  it(`should return empty string on slugifying an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(StringUtils.slugify(emptyStr));
  });

  it(`should return same string on slugifying a white space string`, () => {
    expect(pipe.transform(whiteSpaceStr)).toEqual(StringUtils.slugify(whiteSpaceStr));
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
