import {ArrLengthPipe} from './arr-length.pipe';

describe('ArrLengthPipe', () => {
  const pipe = new ArrLengthPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should give empty array length', () => {
    expect(pipe.transform([])).toBe(0);
  })
  it('should return 0 on null', () => {
    expect(pipe.transform(null)).toBe(0);
  })
});
