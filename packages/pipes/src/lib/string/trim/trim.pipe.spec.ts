import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  const str = ' test is running!  ';

  beforeEach(() => {
    pipe = new TrimPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should trim a string`, () => {
    expect(pipe.transform(str)).toEqual(str.trim());
  });

});
