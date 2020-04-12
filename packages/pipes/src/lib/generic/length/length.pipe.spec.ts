import { LengthPipe } from './length.pipe';

describe('LengthPipe', () => {
  let pipe: LengthPipe;

  const str = 'test is running!';
  const num = -12345.67890;
  const arr = ['a', 'b', 'c', 'd', 'e'];

  beforeEach(() => {
    pipe = new LengthPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find length of a string`, () => {
    expect(pipe.transform(str)).toEqual(str.length);
  });

  it(`should find length of a number`, () => {
    expect(pipe.transform(num)).toEqual(num.toString().length);
  });

  it(`should find length of an array`, () => {
    expect(pipe.transform(arr)).toEqual(arr.length);
  });

});
