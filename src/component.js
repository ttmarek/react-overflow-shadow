import React, { Component } from 'react';
import { getHorizontalOverflowState } from './get-horizontal-overflow-state';
import { getVerticalOverflowState } from './get-vertical-overflow-state';

const styles = {
  wrapper: {
    overflow: 'hidden',
    position: 'relative',
  },

  scroller: {

  },

  topShadow: {
    height: '50px',
    backgroundColor: 'blue',
  },

  bottomShadow: {
    height: '50px',
    backgroundColor: 'blue',
  },

  leftShadow: {
    width: '30px',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
  },

  rightShadow: {
    width: '30px',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: 0,
  },
};

class OverflowShadow extends Component {
  propTypes: {
    children: React.PropTypes.node,
    hasHorizontalScroll: React.PropTypes.bool,
    hasVerticalScroll: React.PropTypes.bool,
    customStyles: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      hasTopShadow: false,
      hasBottomShadow: false,
      hasLeftShadow: false,
      hasRightShadow: false,
    };

    this.applyShadows = this.applyShadows.bind(this);
    this.saveScrollerRef = this.saveScrollerRef.bind(this);
  }

  componentDidUpdate() {
    console.group('componentDidUpdate');
    console.log({ state: this.state });
    console.groupEnd();
  }

  applyShadows() {
    const {
      hasOverflowTop,
      hasOverflowBottom,
    } = getVerticalOverflowState(this.scroller);
    const {
      hasOverflowLeft,
      hasOverflowRight,
    } = getHorizontalOverflowState(this.scroller);

    this.setState({
      hasTopShadow: hasOverflowTop,
      hasBottomShadow: hasOverflowBottom,
      hasLeftShadow: hasOverflowLeft,
      hasRightShadow: hasOverflowRight,
    });
  }

  saveScrollerRef(ref) {
    this.scroller = ref;
    // When the component unmounts the ref callback is called once with
    // null to prevent memory leaks. applyShadows should not
    // be called when this happens as it would cause a runtime error
    // and freeze the app.
    if (ref !== null) {
      this.applyShadows();
    }
  }

  render() {
    const {
      children,
      customStyles,
      hasHorizontalScroll,
      hasVerticalScroll,
    } = this.props;
    const {
      hasTopShadow,
      hasBottomShadow,
      hasLeftShadow,
      hasRightShadow,
    } = this.state;

    const topShadow = <div style={styles.topShadow} ></div>;
    const bottomShadow = <div style={styles.bottomShadow} ></div>;
    const leftShadow = <div style={styles.leftShadow} ></div>;
    const rightShadow = <div style={styles.rightShadow} ></div>;

    const scrollerStyles = Object.assign(
      {},
      styles.scroller,
      customStyles,
      { overflowX: hasHorizontalScroll ? 'scroll' : 'hidden' },
      { overflowY: hasVerticalScroll ? 'scroll' : 'hidden' }
    );

    return (
      <div style={ styles.wrapper }>
        <div
          style={ scrollerStyles }
          ref={this.saveScrollerRef}
          onScroll={this.applyShadows}
        >
          { children }
          { hasTopShadow ? topShadow : null }
          { hasBottomShadow ? bottomShadow : null }
          { hasLeftShadow ? leftShadow : null }
          { hasRightShadow ? rightShadow : null }
        </div>
      </div>
    );
  }
};

export { OverflowShadow };
