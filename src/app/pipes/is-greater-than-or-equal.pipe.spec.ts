import {IsGreaterThanOrEqualPipe} from './is-greater-than-or-equal.pipe';

describe('IsGreaterThanPipe', () => {
  const pipe = new IsGreaterThanOrEqualPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return false if parameter is null', () => {
    expect(pipe.transform(null, 10)).toEqual(false);
  })
  it('should return false if value is smaller than parameter', () => {
    expect(pipe.transform(5, 10)).toEqual(false);
  })
  it('should return true if value is greater than parameter', () => {
    expect(pipe.transform(10, 2)).toEqual(true);
  })
});
