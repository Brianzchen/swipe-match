// @flow
import * as React from 'react';

import Typography from 'components/Typography';

type PropsT = {
  children: React.Node,
};

const Banner = ({
  children,
}: PropsT): React.Node => {
  const style = {
    color: '#ffd9d9',
    backgroundColor: '#bf0000',
    margin: '8px 16px',
    padding: '8px',
  };

  return (
    <Typography
      variant="heading1"
      css={style}
    >
      {children}
    </Typography>
  );
};

export default Banner;
