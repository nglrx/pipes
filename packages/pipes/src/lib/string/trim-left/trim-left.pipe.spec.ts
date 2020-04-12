import { TrimLeftPipe } from './trim-left.pipe';

describe('TrimLeftPipe', () => {
  let pipe: TrimLeftPipe;

  const str = ' test is running!  ';

  beforeEach(() => {
    pipe = new TrimLeftPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string from left`, () => {
    expect(pipe.transform(str)).toEqual(str.trimLeft());
  });

});
