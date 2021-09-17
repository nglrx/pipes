import { RepeatPipe } from './repeat.pipe';

describe('RepeatPipe', () => {
  let pipe: RepeatPipe;

  beforeEach(() => {
    pipe = new RepeatPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should repeat a string default 'count' times separated with default 'delimiter'`, () => {
    expect(pipe.transform('Repeated')).toEqual('Repeated');
  });

  it(`should repeat a string for specified 'count' times separated with default 'delimiter'`, () => {
    expect(pipe.transform('Repeated', 3)).toEqual('RepeatedRepeatedRepeated');
  });

  it(`should repeat a string for default 'count' times separated with specified 'delimiter'`, () => {
    expect(pipe.transform('Repeated', undefined, '-')).toEqual('Repeated');
  });

  it(`should repeat a string for specified 'count' times separated with specified 'delimiter'`, () => {
    expect(pipe.transform('Repeated', 5, '_')).toEqual(
      'Repeated_Repeated_Repeated_Repeated_Repeated'
    );
  });

  it(`should return empty on repeating an empty string`, () => {
    expect(pipe.transform('', 4)).toEqual('');
  });

  it(`should throw error if count is less than 1`, () => {
    expect(() => pipe.transform('Repeated', -1)).toThrow(
      new Error(`Value of argument 'count' should be >= 1`)
    );
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
