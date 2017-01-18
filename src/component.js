import React, { Component } from 'react';

const styles = {
  frame: {
    overflow: 'hidden',
  },

  window: {
    position: 'relative',
    maxHeight: '100%',
    marginRight: '-50px',
    paddingRight: '50px',
    marginTop: '-50px',
    paddingTop: '50px',
  },

  overflowX: {
    overflowX: 'scroll',
    overflowY: 'hidden',
  },

  overflowY: {
    overflowX: 'hidden',
    overflowY: 'scroll',
  },


};

class OverflowShadow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasTopShadow: false,
      hasBottomShadow: false,
      hasLeftShadow: false,
      hasRightShadow: false,
    };
  }

  render() {
    const {
      children
    } = this.props;

    const {
      hasTopShadow,
      hasBottomShadow,
      hasLeftShadow,
      hasRightShadow,
    } = this.state;

    const topShadow = '';
    const bottomShadow = '';
    const leftShadow = '';
    const rightShadow = '';

    return (
      <div style={styles.frame}>
        <div style={styles.window}>
          {children}
          { hasTopShadow ? topShadow : null }
          { hasBottomShadow ? bottomShadow : null }
          { hasLeftShadow ? leftShadow : null }
          { hasRightShadow ? rightShadow : null }
        </div>
      </div>
    );
  }
};

export { OverflowShadow }
