import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should join an array using default separator`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'])).toEqual('a,b,c,d,e');
  });

  it(`should join an array using a given separator`, () => {
    expect(pipe.transform(['a', 'b', 'c', 'd', 'e'], ' - ')).toEqual('a - b - c - d - e');
  });

  it(`should join an array with undefined, null or empty values`, () => {
    expect(pipe.transform(['a', undefined, null, '', 'e'])).toEqual('a,,,,e');
  });

  it(`should return empty string for an empty array`, () => {
    expect(pipe.transform([])).toEqual('');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
