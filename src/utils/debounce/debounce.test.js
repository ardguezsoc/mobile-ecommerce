import debounce from '.';
import { vi, expect, describe, it, beforeEach } from 'vitest';

vi.useFakeTimers('modern');

let func;

beforeEach(() => {
  func = vi.fn();
});

describe('Test debounce Utils', () => {
  it('execute 0 times', () => {
    const debouncedFunc = debounce(func, 500);
    debouncedFunc();
    vi.advanceTimersByTime(250);
    expect(func).toBeCalledTimes(0);
  });

  it('execute 1 time', () => {
    const debouncedFunc = debounce(func, 500);
    debouncedFunc();
    vi.advanceTimersByTime(250);
    debouncedFunc();
    vi.advanceTimersByTime(550);
    expect(func).toBeCalledTimes(1);
  });
});
