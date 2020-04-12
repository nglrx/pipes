import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  const str = 'test is running!';
  const num = -12345.67890;
  const arr = ['a', 'b', 'c', 'd', 'e'];

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should reverse a string`, () => {
    expect(pipe.transform(str)).toEqual(str.split('').reverse().join(''));
  });

  it(`should reverse a number`, () => {
    expect(pipe.transform(num)).toEqual(num.toString().split('').reverse().join(''));
  });

  it(`should reverse an array`, () => {
    const revArr = [...arr].reverse();
    expect(pipe.transform(arr)).toEqual(revArr);
  });

});
