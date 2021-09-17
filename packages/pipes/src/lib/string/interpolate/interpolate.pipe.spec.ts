import { InterpolatePipe } from './interpolate.pipe';

describe('InterpolatePipe', () => {
  let pipe: InterpolatePipe;

  beforeEach(() => {
    pipe = new InterpolatePipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should replace parameters within string with given target strings`, () => {
    expect(pipe.transform('This {0} an {1} {2}!', 'is', 'interpolated', 'string'))
      .toEqual('This is an interpolated string!');
  });

  it(`should replace parameters within string with given target strings with some missing`, () => {
    expect(pipe.transform('This {0} an {1} {2} with {3} missed!', 'is', 'interpolated', 'string'))
      .toEqual('This is an interpolated string with {3} missed!');
  });

  it(`should replace parameters within string with given target strings and skips extra ones`, () => {
    expect(pipe.transform('This {0} an {1} {2}!', 'is', 'interpolated', 'string', 'extra'))
      .toEqual('This is an interpolated string!');
  });

  it(`should replace parameters in random order within string with given target strings`, () => {
    expect(pipe.transform('This {2} another {0} {1}!', 'interpolated', 'string', 'is'))
      .toEqual('This is another interpolated string!');
  });

  it(`should replace parameters within string with undefined, null or empty target values`, () => {
    expect(pipe.transform('This string has undefined{0}, null{1} and empty{2} values!', undefined, null, ''))
      .toEqual('This string has undefined{0}, null{1} and empty values!');
  });

  it(`should return same string if no target strings are provided`, () => {
    expect(pipe.transform('This {0} an {1} {2}!')).toEqual('This {0} an {1} {2}!');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
