// @flow
import * as React from 'react';

import Box from 'components/Box';
import Typography from 'components/Typography';
import { secondary } from 'utils/colors';

import Column from './Column';

type PropsT = {
  distance: number,
  wage: number,
};

const Headline = ({
  distance,
  wage,
}: PropsT): React.Node => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: secondary,
      padding: '16px',
    },
    dollar: {
      position: 'relative',
      top: '-15px',
      left: '-2px',
      display: 'inline',
    },
  };

  return (
    <Box css={styles.container}>
      <Column
        testid="distance"
        label="Distance"
        value={`${distance} miles`}
      />
      <Column
        testid="hourly-rate"
        label="Hourly Rate"
        value={(
          <>
            <Typography
              css={styles.dollar}
              variant="heading2"
            >
              $
            </Typography>
            {wage.toFixed(2)}
          </>
        )}
        alignment="right"
      />
    </Box>
  );
};

export default Headline;
