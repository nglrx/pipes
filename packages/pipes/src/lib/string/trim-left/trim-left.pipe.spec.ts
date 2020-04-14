import { TrimLeftPipe } from './trim-left.pipe';

describe('TrimLeftPipe', () => {
  let pipe: TrimLeftPipe;

  const str = ' test is running!  ';
  const emptyStr = '';

  beforeEach(() => {
    pipe = new TrimLeftPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string from left`, () => {
    expect(pipe.transform(str)).toEqual(str.trimLeft());
  });

  it(`should return empty string on trimming an empty string from left`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr.trimLeft());
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
