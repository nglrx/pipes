import { TypeOfPipe } from './type-of.pipe';

describe('TypeOfPipe', () => {
  let pipe: TypeOfPipe;

  beforeEach(() => {
    pipe = new TypeOfPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should find type of a string`, () => {
    expect(pipe.transform('This is a test string!')).toEqual('string');
  });

  it(`should find type of a number`, () => {
    const typeOfNum = 'number';
    expect(pipe.transform(22)).toEqual(typeOfNum);
    expect(pipe.transform(NaN)).toEqual(typeOfNum);
    expect(pipe.transform(Infinity)).toEqual(typeOfNum);
  });

  it(`should find type of a boolean`, () => {
    expect(pipe.transform(true)).toEqual('boolean');
  });

  it(`should find type of a array`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'])).toEqual('object');
  });

  it(`should find type of an object`, () => {
    expect(pipe.transform({ foo: 'bar' })).toEqual('object');
  });

  it(`should find type of a Date`, () => {
    expect(pipe.transform(new Date())).toEqual('object');
  });

  it(`should find type of null`, () => {
    expect(pipe.transform(null)).toEqual('object');
  });

  it(`should find type of function`, () => {
    expect(pipe.transform(() => {})).toEqual('function');
  });

  it(`should find type of undefined`, () => {
    expect(pipe.transform(undefined)).toEqual('undefined');
  });

});
