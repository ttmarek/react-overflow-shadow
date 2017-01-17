import { getVerticalOverflowState } from '../get-vertical-overflow-state';

describe('When there is no vertical overflow', () => {
  it('returns { hasOverflowTop: false, hasOverflowBottom: false }', () => {
    const container = {
      clientHeight: 100,
      scrollTop: 0,
      scrollHeight: 100,
    };

    const state = getVerticalOverflowState(container);

    expect(state).toEqual({
      hasOverflowTop: false,
      hasOverflowBottom: false,
    });
  });
});

describe('When there is overflow on the bottom edge', () => {
  it('returns { hasOverflowTop: false, hasOverflowBottom: true }', () => {
    const container = {
      clientHeight: 100,
      scrollTop: 0,
      scrollHeight: 200,
    };

    const state = getVerticalOverflowState(container);

    expect(state).toEqual({
      hasOverflowTop: false,
      hasOverflowBottom: true,
    });
  });
});

describe('When there is overflow on the top edge', () => {
  it('returns { hasOverflowTop: true, hasOverflowBottom: false }', () => {
    const container = {
      clientHeight: 100,
      scrollTop: 100,
      scrollHeight: 200,
    };

    const state = getVerticalOverflowState(container);

    expect(state).toEqual({
      hasOverflowTop: true,
      hasOverflowBottom: false,
    });
  });
});

describe('When there is overflow on both the top and bottom edges', () => {
  it('returns { hasOverflowTop: true, hasOverflowBottom: true }', () => {
    const container = {
      clientHeight: 100,
      scrollTop: 50,
      scrollHeight: 200,
    };

    const state = getVerticalOverflowState(container);

    expect(state).toEqual({
      hasOverflowTop: true,
      hasOverflowBottom: true,
    });
  });
});
