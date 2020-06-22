// @flow
import * as React from 'react';

import Box from 'components/Box';
import Typography from 'components/Typography';
import { inverse } from 'utils/colors';

type PropsT = {
  testid: string,
  label: React.Node,
  value: React.Node,
  alignment?: 'left' | 'right',
};

const Column = ({
  testid,
  label,
  value,
  alignment = 'left',
}: PropsT): React.Node => {
  const styles = {
    container: {
    },
    value: {
      position: 'relative',
      color: inverse,
      textAlign: alignment,
    },
  };

  return (
    <Box>
      <Typography
        data-testid={`${testid}-label`}
        variant="displayTitle2"
      >
        {label}
      </Typography>
      <Typography
        data-testid={`${testid}-value`}
        css={styles.value}
        variant="displayTitle1"
      >
        {value}
      </Typography>
    </Box>
  );
};

export default Column;
