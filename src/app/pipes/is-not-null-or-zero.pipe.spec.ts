import { IsNotNullOrZeroPipe } from './is-not-null-or-zero.pipe';

describe('IsNotNullOrZeroPipe', () => {
  it('create an instance', () => {
    const pipe = new IsNotNullOrZeroPipe();
    expect(pipe).toBeTruthy();
  });
});
