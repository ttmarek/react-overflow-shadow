import { getHorizontalOverflowState } from '../get-horizontal-overflow-state';

describe('When there is no horizontal overflow', () => {
  it('returns { hasOverflowLeft: false, hasOverflowRight: false }', () => {
    const container = {
      clientWidth: 100,
      scrollLeft: 0,
      scrollWidth: 100,
    };

    const state = getHorizontalOverflowState(container);

    expect(state).toEqual({
      hasOverflowLeft: false,
      hasOverflowRight: false,
    });
  });
});

describe('When there is overflow on the right edge', () => {
  it('returns { hasOverflowLeft: false, hasOverflowRight: true }', () => {
    const container = {
      clientWidth: 100,
      scrollLeft: 0,
      scrollWidth: 200,
    };

    const state = getHorizontalOverflowState(container);

    expect(state).toEqual({
      hasOverflowLeft: false,
      hasOverflowRight: true,
    });
  });
});

describe('When there is overflow on the left edge', () => {
  it('returns { hasOverflowLeft: true, hasOverflowRight: false }', () => {
    const container = {
      clientWidth: 100,
      scrollLeft: 100,
      scrollWidth: 200,
    };

    const state = getHorizontalOverflowState(container);

    expect(state).toEqual({
      hasOverflowLeft: true,
      hasOverflowRight: false,
    });
  });
});

describe('When there is overflow on both the left and right edges', () => {
  it('returns { hasOverflowLeft: true, hasOverflowRight: true }', () => {
    const container = {
      clientWidth: 100,
      scrollLeft: 50,
      scrollWidth: 200,
    };

    const state = getHorizontalOverflowState(container);

    expect(state).toEqual({
      hasOverflowLeft: true,
      hasOverflowRight: true,
    });
  });
});
