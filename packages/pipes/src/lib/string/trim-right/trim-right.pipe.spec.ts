import { TrimRightPipe } from './trim-right.pipe';

describe('TrimRightPipe', () => {
  let pipe: TrimRightPipe;

  const str = ' test is running!  ';

  beforeEach(() => {
    pipe = new TrimRightPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string from left`, () => {
    expect(pipe.transform(str)).toEqual(str.trimRight());
  });

});
