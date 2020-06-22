// @flow
import * as React from 'react';

import * as colors from 'utils/colors';

import Typography from '../Typography';

type PropsT = {
  children?: React.Node,
  type?: 'button' | 'reset' | 'submit',
  onClick?: Function,
  variant?: 'primary' | 'secondary',
  css?: {},
};

const Button = ({
  children = null,
  type = 'button',
  variant = 'primary',
  css = {},
  ...otherProps
}: PropsT): React.Node => {
  const style = {
    ...css,
    color: variant === 'primary' ? colors.inverse : colors.tertiary,
    backgroundColor: variant === 'primary' ? colors.primary : 'transparent',
    border: `2px solid ${variant === 'primary' ? colors.primary : colors.tertiary}`,
    borderRadius: '4px',
    padding: '16px',
    outline: 'none',
  };

  return (
    <Typography
      {...otherProps}
      variant="button"
      as="button"
      type={type}
      css={style}
    >
      {children}
    </Typography>
  );
};

export default Button;
