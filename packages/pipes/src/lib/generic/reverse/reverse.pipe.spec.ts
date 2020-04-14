import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  const str = 'test is running!';
  const emptyStr = '';
  const num = -12345.67890;
  const bool = false;
  const arr = ['a', 'b', 'c', 'd', 'e'];
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
    expect(pipe.transform(str)).toEqual(reverseStr(str));
  });

  it(`should reverse an empty string`, () => {
    expect(pipe.transform(emptyStr)).toEqual(reverseStr(emptyStr));
  });

  it(`should reverse a number`, () => {
    expect(pipe.transform(num)).toEqual(reverseStr(num.toString()));
  });

  it(`should reverse a boolean`, () => {
    expect(pipe.transform(bool)).toEqual(reverseStr(bool.toString()));
  });

  it(`should reverse an array`, () => {
    const revArr = [...arr].reverse();
    expect(pipe.transform(arr)).toEqual(revArr);
  });

  it(`should reverse an empty array`, () => {
    expect(pipe.transform(emptyArr)).toEqual(emptyArr);
  });

  it(`should return input for unsupported types Object, Date`, () => {
    expect(pipe.transform(obj)).toEqual(obj);
    expect(pipe.transform(date)).toEqual(date);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual(null);
  });

});

function reverseStr(str: string): any {
  return str.split('').reverse().join('');
}

