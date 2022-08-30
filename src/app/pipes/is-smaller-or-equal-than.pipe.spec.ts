import { IsSmallerOrEqualThanPipe } from './is-smaller-or-equal-than.pipe';

describe('IsSmallerOrEqualThanPipe', () => {
  it('create an instance', () => {
    const pipe = new IsSmallerOrEqualThanPipe();
    expect(pipe).toBeTruthy();
  });
});
