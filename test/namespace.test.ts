import { MathUtils } from '../src/math-utils';

describe('Namespace', () => {
  it('should have namespace', () => {
    console.info('Pi', MathUtils.PI);
    console.info('Sum', MathUtils.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  });
});
