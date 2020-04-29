import { UpperCasePipe } from './upper-case.pipe';
import { StringUtils } from '../../utils/string-utils';

describe('UpperCasePipe', () => {
  let pipe: UpperCasePipe;

  const str = 'test is running!';
  const emptyStr = '';
  const whiteSpaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new UpperCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to upper case`, () => {
    expect(pipe.transform(str)).toEqual(StringUtils.toUpperCase(str));
  });

  it(`should return empty string on converting an empty string to upper case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(StringUtils.toUpperCase(emptyStr));
  });

  it(`should return same string on converting a white space string to upper case`, () => {
    expect(pipe.transform(whiteSpaceStr)).toEqual(StringUtils.toUpperCase(whiteSpaceStr));
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
