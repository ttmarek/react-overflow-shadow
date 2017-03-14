import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { OverflowShadow } from '../src/component';

storiesOf('OverflowShadow', module)
  .add('test', () => (
    <OverflowShadow
      hasVerticalScroll
      hasHorizontalScroll
      customStyles={{ height: '300px', width: '200px' }}
    >
      <img src="http://lorempixel.com/300/500/" />
    </OverflowShadow>
  ));
