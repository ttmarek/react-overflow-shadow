import { getHorizontalOverflowState } from '../get-horizontal-overflow-state';

describe('getHorizontalOverflowState(container)', () => {
  test('no horizontal overflow', () => {
    const container = {
      clientWidth: 100,
      scrollLeft: 0,
      scrollWidth: 100,
    };

    expect(getHorizontalOverflowState(container)).toEqual({
      hasOverflowLeft: false,
      hasOverflowRight: false,
    });
  });

  test('overflow on the right edge', () => {
    const container = {
      clientWidth: 100,
      scrollLeft: 0,
      scrollWidth: 200,
    };

    expect(getHorizontalOverflowState(container)).toEqual({
      hasOverflowLeft: false,
      hasOverflowRight: true,
    });
  });

  test('overflow on the left edge', () => {
    const container = {
      clientWidth: 100,
      scrollLeft: 100,
      scrollWidth: 200,
    };

    expect(getHorizontalOverflowState(container)).toEqual({
      hasOverflowLeft: true,
      hasOverflowRight: false,
    });
  });


  test('overflow on both the left and right edges', () => {
    const container = {
      clientWidth: 100,
      scrollLeft: 50,
      scrollWidth: 200,
    };

    expect(getHorizontalOverflowState(container)).toEqual({
      hasOverflowLeft: true,
      hasOverflowRight: true,
    });
  });
});
