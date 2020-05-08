import { LengthPipe } from './length.pipe';

describe('LengthPipe', () => {
  let pipe: LengthPipe;

  const str = 'This is a test string!';
  const strLength = 22;
  const emptyStr = '';
  const emptyStrLength = 0;
  const num = -12345.67890;
  const numLength = 11;
  const bool = true;
  const boolLength = 4;
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const arrLength = 5;
  const emptyArr = [];
  const emptyArrLength = 0;
  const obj = { foo: 'bar' };
  const date = new Date();

  beforeEach(() => {
    pipe = new LengthPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find length of a string`, () => {
    expect(pipe.transform(str)).toEqual(strLength);
  });

  it(`should find length of an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStrLength);
  });

  it(`should find length of a number`, () => {
    expect(pipe.transform(num)).toEqual(numLength);
  });

  it(`should find length of a boolean`, () => {
    expect(pipe.transform(bool)).toEqual(boolLength);
  });

  it(`should find length of an array`, () => {
    expect(pipe.transform(arr)).toEqual(arrLength);
  });

  it(`should find length of an empty array`, () => {
    expect(pipe.transform(emptyArr)).toEqual(emptyArrLength);
  });

  it(`should return null for unsupported types Object, Date`, () => {
    expect(pipe.transform(obj)).toEqual(null);
    expect(pipe.transform(date)).toEqual(null);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});
