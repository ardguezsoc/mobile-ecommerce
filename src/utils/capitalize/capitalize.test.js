import { capitalize } from '.';
import { describe, test, expect } from 'vitest';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('brand')).toBe('Brand');
  });

  test('should return an empty string if the input is an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should return the same string if the first character is already capitalized', () => {
    expect(capitalize('Model')).toBe('Model');
  });
});
