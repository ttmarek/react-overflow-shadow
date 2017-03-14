import { getVerticalOverflowState } from '../get-vertical-overflow-state';

describe('getVerticalOverflowState(container)', () => {
  test('no vertical overflow', () => {
    const container = {
      clientHeight: 100,
      scrollTop: 0,
      scrollHeight: 100,
    };

    expect(getVerticalOverflowState(container)).toEqual({
      hasOverflowTop: false,
      hasOverflowBottom: false,
    });
  });

  test('overflow on the bottom edge', () => {
    const container = {
      clientHeight: 100,
      scrollTop: 0,
      scrollHeight: 200,
    };

    expect(getVerticalOverflowState(container)).toEqual({
      hasOverflowTop: false,
      hasOverflowBottom: true,
    });
  });

  test('overflow on the top edge', () => {
    const container = {
      clientHeight: 100,
      scrollTop: 100,
      scrollHeight: 200,
    };

    expect(getVerticalOverflowState(container)).toEqual({
      hasOverflowTop: true,
      hasOverflowBottom: false,
    });
  });

  test('overflow on both the top and bottom edges', () => {
    const container = {
      clientHeight: 100,
      scrollTop: 50,
      scrollHeight: 200,
    };

    expect(getVerticalOverflowState(container)).toEqual({
      hasOverflowTop: true,
      hasOverflowBottom: true,
    });
  });
});
