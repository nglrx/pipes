import { LengthPipe } from './length.pipe';

describe('LengthPipe', () => {
  let pipe: LengthPipe;

  const str = 'test is running!';
  const emptyStr = '';
  const num = -12345.67890;
  const bool = true;
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const emptyArr = [];
  const obj = { foo: 'bar' };
  const date = new Date();

  beforeEach(() => {
    pipe = new LengthPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find length of a string`, () => {
    expect(pipe.transform(str)).toEqual(str.length);
  });

  it(`should find length of an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr.length);
  });

  it(`should find length of a number`, () => {
    expect(pipe.transform(num)).toEqual(num.toString().length);
  });

  it(`should find length of a boolean`, () => {
    expect(pipe.transform(bool)).toEqual(bool.toString().length);
  });

  it(`should find length of an array`, () => {
    expect(pipe.transform(arr)).toEqual(arr.length);
  });

  it(`should find length of an empty array`, () => {
    expect(pipe.transform(emptyArr)).toEqual(emptyArr.length);
  });

  it(`should return null for unsupported types Object, Date`, () => {
    expect(pipe.transform(obj)).toEqual(null);
    expect(pipe.transform(date)).toEqual(null);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
