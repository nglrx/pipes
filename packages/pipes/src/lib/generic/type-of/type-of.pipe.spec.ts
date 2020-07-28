import { TypeOfPipe } from './type-of.pipe';

describe('TypeOfPipe', () => {
  let pipe: TypeOfPipe;

  const str = 'This is a test string!';
  const typeOfStr = 'string';
  const num = 22;
  const nan = NaN;
  const infinity = Infinity;
  const typeOfNum = 'number';
  const bool = true;
  const typeOfBool = 'boolean';
  const obj = { foo: 'bar' };
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const typeOfObj = 'object';
  const date = new Date();
  function func() {}
  const typeOfFunction = 'function';
  const typeOfUndefined = 'undefined';

  beforeEach(() => {
    pipe = new TypeOfPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find type of a string`, () => {
    expect(pipe.transform(str)).toEqual(typeOfStr);
  });

  it(`should find type of a number`, () => {
    expect(pipe.transform(num)).toEqual(typeOfNum);
    expect(pipe.transform(nan)).toEqual(typeOfNum);
    expect(pipe.transform(infinity)).toEqual(typeOfNum);
  });

  it(`should find type of a boolean`, () => {
    expect(pipe.transform(bool)).toEqual(typeOfBool);
  });

  it(`should find type of a arr`, () => {
    expect(pipe.transform(arr)).toEqual(typeOfObj);
  });

  it(`should find type of an object`, () => {
    expect(pipe.transform(obj)).toEqual(typeOfObj);
  });

  it(`should find type of a Date`, () => {
    expect(pipe.transform(date)).toEqual(typeOfObj);
  });

  it(`should find type of undefined`, () => {
    expect(pipe.transform(null)).toEqual(typeOfObj);
    expect(pipe.transform(undefined)).toEqual('undefined');
  });

  it(`should find type of function`, () => {
    expect(pipe.transform(func)).toEqual(typeOfFunction);
  });

  it(`should find type of undefined`, () => {
    expect(pipe.transform(undefined)).toEqual(typeOfUndefined);
  });

});
