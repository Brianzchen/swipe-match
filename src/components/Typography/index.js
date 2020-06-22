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
  | 'button';

type PropsT = {
  children?: React.Node,
  variant?: VariantT,
};

const Typography = ({
  children = null,
  variant = 'body',
}: PropsT): React.Node => {
  const style = {
    ...genText(variant),
  };

  return (
    <Box
      css={style}
    >
      {children}
    </Box>
  );
};

export default Typography;
