import React from 'react';
import renderer from 'react-test-renderer';
import { OverflowShadow } from '../component';

describe('happy path', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <OverflowShadow />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
