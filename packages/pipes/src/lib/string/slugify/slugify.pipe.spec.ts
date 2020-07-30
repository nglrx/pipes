import { SlugifyPipe } from './slugify.pipe';

describe('SlugifyPipe', () => {
  let pipe: SlugifyPipe;

  beforeEach(() => {
    pipe = new SlugifyPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should slugify a string with default separator`, () => {
    expect(pipe.transform('this_-is__a__ test - string!')).toEqual('this-is-a-test-string');
  });

  it(`should slugify a string with specified separator`, () => {
    expect(pipe.transform('this_-is__a__ test - string!', '_'))
      .toEqual('this_is_a_test_string');
  });

  it(`should slugify a string with special characters`, () => {
    expect(pipe.transform('^this:string~is!separated@with#many$special%characters%', '_'))
      .toEqual('this_string_is_separated_with_many_special_characters');
  });

  it(`should return empty string on slugifying an empty string`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return same string on slugifying a whitespace string`, () => {
    expect(pipe.transform('\t\n ')).toEqual('');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
