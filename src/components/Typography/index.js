// @flow
import * as React from 'react';

import Box from '../Box';

import genText from './genText';

export type VariantT = |
  'body'
  | 'label'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'button'
  | 'displayTitle1'
  | 'displayTitle2'
  | 'metadata';

type PropsT = {
  children?: React.Node,
  variant?: VariantT,
  css?: {
    fontSize?: string,
    fontWeight?: string,
    lineHeight?: string,
    ...
  },
};

const Typography = ({
  children = null,
  variant = 'body',
  css = {},
  ...otherProps
}: PropsT): React.Node => {
  const style = {
    ...genText(variant),
    ...css,
  };

  return (
    <Box
      {...otherProps}
      css={style}
    >
      {children}
    </Box>
  );
};

export default Typography;
