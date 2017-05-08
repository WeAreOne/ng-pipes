import { FromNowPipe } from './from-now.pipe';

describe('FromNowPipe', () => {
  let pipe: FromNowPipe;

  beforeEach(() => {
    pipe = new FromNowPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform a date in timer until now', () => {
    const d = new Date(1470175200000);
    const actual = pipe.transform(d);
    expect(actual.endsWith('ago')).toBeTruthy();
  });
});
