function getHorizontalOverflowState(container) {
  const {
    clientWidth,
    scrollLeft,
    scrollWidth,
  } = container;

  const hasRoomToScroll = scrollWidth !== clientWidth;
  const isOnLeftEdge = (scrollLeft === 0);
  const isOnRightEdge = (scrollLeft === (scrollWidth - clientWidth));
  const isBetweenEdges = !isOnLeftEdge && !isOnRightEdge;

  const hasOverflowRight = hasRoomToScroll && (isOnLeftEdge || isBetweenEdges);
  const hasOverflowLeft = hasRoomToScroll && (isOnRightEdge || isBetweenEdges);

  return { hasOverflowLeft, hasOverflowRight };
}

export { getHorizontalOverflowState };
