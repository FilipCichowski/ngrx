import {IsSmallerOrEqualThanPipe} from './is-smaller-or-equal-than.pipe';

describe('IsSmallerOrEqualThanPipe', () => {
  const pipe = new IsSmallerOrEqualThanPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return false if parameter is null', () => {
    expect(pipe.transform(null, 10)).toEqual(false);
  })
  it('should return true if value is smaller than parameter', () => {
    expect(pipe.transform(5, 10)).toEqual(true);
  })
  it('should return false if value is greater than parameter', () => {
    expect(pipe.transform(10, 2)).toEqual(false);
  })
});
