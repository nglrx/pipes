import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  const str = 'This is a test string!';
  const reverseStr = '!gnirts tset a si sihT'
  const emptyStr = '';
  const num = -12345.67890;
  const reverseNumStr = '9876.54321-';
  const bool = false;
  const boolReverse = 'eslaf'
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const arrReverse = ['e', 'd', 'c', 'b', 'a'];
  const emptyArr = [];
  const obj = { foo: 'bar' };
  const date = new Date();

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should reverse a string`, () => {
    expect(pipe.transform(str)).toEqual(reverseStr);
  });

  it(`should reverse an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(emptyStr);
  });

  it(`should reverse a number`, () => {
    expect(pipe.transform(num)).toEqual(reverseNumStr);
  });

  it(`should reverse a boolean`, () => {
    expect(pipe.transform(bool)).toEqual(boolReverse);
  });

  it(`should reverse an array`, () => {
    expect(pipe.transform(arr)).toEqual(arrReverse);
  });

  it(`should reverse an empty array`, () => {
    expect(pipe.transform(emptyArr)).toEqual(emptyArr);
  });

  it(`should return input for unsupported types Object, Date`, () => {
    expect(pipe.transform(obj)).toBeNull();
    expect(pipe.transform(date)).toBeNull();
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
