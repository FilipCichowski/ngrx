import { IsGreaterThanOrEqualPipe } from './is-greater-than-or-equal.pipe';

describe('IsGreaterThanPipe', () => {
  it('create an instance', () => {
    const pipe = new IsGreaterThanOrEqualPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return false if parameter is null', () => {
    const pipe = new IsGreaterThanOrEqualPipe();

    expect(pipe.transform(null, 10)).toEqual(false);
  })
  it('should return false if value is smaller than parameter', () => {
    const pipe = new IsGreaterThanOrEqualPipe();

    expect(pipe.transform(5, 10)).toEqual(false);
  })
  it('should return true if value is greater than parameter', () => {
    const pipe = new IsGreaterThanOrEqualPipe();

    expect(pipe.transform(10, 2)).toEqual(true);
  })
});
