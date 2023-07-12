import filterMobileArray from './filterMobileArray';
import { it, describe, expect } from 'vitest';

describe('filterMobileArray', () => {
  const mobileArray = [
    { brand: 'Apple', model: 'iPhone 12' },
    { brand: 'Samsung', model: 'Galaxy S21' },
  ];

  it('should return an empty array if there is no match', () => {
    const filter = 'xiaomi';
    const result = filterMobileArray(mobileArray, filter);
    expect(result).toEqual([]);
  });

  it('should return an array with the matching items', () => {
    const filter = 'apple';
    const result = filterMobileArray(mobileArray, filter);
    expect(result).toEqual([{ brand: 'Apple', model: 'iPhone 12' }]);
  });

  it('should return the array received with an empty string', () => {
    const filter = '';
    const result = filterMobileArray(mobileArray, filter);
    expect(result).toEqual(mobileArray);
  });
});
