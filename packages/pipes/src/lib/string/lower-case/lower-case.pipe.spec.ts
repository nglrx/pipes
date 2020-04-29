import { LowerCasePipe } from './lower-case.pipe';
import { StringUtils } from '../../utils/string-utils';

describe('LowerCasePipe', () => {
  let pipe: LowerCasePipe;

  const str = 'test is running!';
  const emptyStr = '';
  const whiteSpaceStr = '\t\n ';

  beforeEach(() => {
    pipe = new LowerCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string to lower case`, () => {
    expect(pipe.transform(str)).toEqual(StringUtils.toLowerCase(str));
  });

  it(`should return empty string on converting an empty string to lower case`, () => {
    expect(pipe.transform(emptyStr)).toEqual(StringUtils.toLowerCase(emptyStr));
  });

  it(`should return same string on converting a white space string to lower case`, () => {
    expect(pipe.transform(whiteSpaceStr)).toEqual(StringUtils.toLowerCase(whiteSpaceStr));
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
