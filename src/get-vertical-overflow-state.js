function getVerticalOverflowState(container) {
  const {
    clientHeight,
    scrollTop,
    scrollHeight,
  } = container;

  const hasRoomToScroll = scrollHeight !== clientHeight;
  const isOnTopEdge = (scrollTop === 0);
  const isOnBottomEdge = (scrollTop === (scrollHeight - clientHeight));
  const isBetweenEdges = !isOnTopEdge && !isOnBottomEdge;

  const hasOverflowTop = hasRoomToScroll && (isOnBottomEdge || isBetweenEdges);
  const hasOverflowBottom = hasRoomToScroll && (isOnTopEdge || isBetweenEdges);

  return { hasOverflowTop, hasOverflowBottom };
};

export { getVerticalOverflowState };
