import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should reverse a string`, () => {
    expect(pipe.transform('This is a test string!')).toEqual('!gnirts tset a si sihT');
  });

  it(`should reverse an empty string`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should reverse a number`, () => {
    expect(pipe.transform(-12345.67890)).toEqual('9876.54321-');
  });

  it(`should reverse a boolean`, () => {
    expect(pipe.transform(false)).toEqual('eslaf');
  });

  it(`should reverse an array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'])).toEqual(['e', 'd', 'c', 'b', 'a']);
  });

  it(`should reverse an empty array`, () => {
    expect(pipe.transform([])).toEqual([]);
  });

  it(`should return input for unsupported types Object, Date`, () => {
    const obj = { foo: 'bar' };
    expect(pipe.transform(obj)).toBe(obj);
    const date = new Date();
    expect(pipe.transform(date)).toBe(date);
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
