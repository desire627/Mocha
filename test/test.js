import { assert } from 'chai';
import { multiply } from '../multiply.js';

describe('multiply function', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
});