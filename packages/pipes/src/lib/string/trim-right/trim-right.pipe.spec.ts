import { TrimRightPipe } from './trim-right.pipe';

describe('TrimRightPipe', () => {
  let pipe: TrimRightPipe;

  const str = ' test is running!  ';
  const emptyStr = ''

  beforeEach(() => {
    pipe = new TrimRightPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string from left`, () => {
    expect(pipe.transform(str)).toEqual(str.trimRight());
  });

  it(`should return empty string on trimming an empty string from right`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr.trimRight());
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
