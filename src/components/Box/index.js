// @flow
import * as React from 'react';
import styled from 'styled-components';

const Element = styled.div(({
  css,
}) => ({
  boxSizing: 'border-box',
  ...css,
}));

type PropsT = {
  children?: React.Node,
  css?: {},
};

const Box = ({
  children = null,
  css = {},
  ...otherProps
}: PropsT): React.Node => (
  <Element
    {...otherProps}
    css={css}
  >
    {children}
  </Element>
);

export default Box;
