import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  const str = ' test is running!  ';
  const emptyStr = '';

  beforeEach(() => {
    pipe = new TrimPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string`, () => {
    expect(pipe.transform(str)).toEqual(str.trim());
  });

  it(`should return empty string on trimming an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr.trim());
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
