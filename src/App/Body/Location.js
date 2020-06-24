// @flow
import * as React from 'react';

import Typography from 'components/Typography';
import { tertiary } from 'utils/colors';

type PropsT = {
  location: string,
  distance: number,
};

const Location = ({
  location,
  distance,
}: PropsT): React.Node => {
  const styles = {
    distance: {
      color: tertiary,
    },
  };

  return (
    <>
      <Typography variant="label">
        Location
      </Typography>
      <Typography>
        {location}
      </Typography>
      <Typography
        css={styles.distance}
        variant="metadata"
      >
        {`${distance.toFixed(2)} miles from your job search location`}
      </Typography>
    </>
  );
};

export default Location;
