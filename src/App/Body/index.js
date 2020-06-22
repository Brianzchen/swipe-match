// @flow
import * as React from 'react';

import Box from 'components/Box';
import { background } from 'utils/colors';

import Headline from './Headline';
import JobTitle from './JobTitle';

type PropsT = {
  data: JobMatchT,
};

const Body = ({
  data,
}: PropsT): React.Node => {
  const styles = {
    container: {
      margin: '8px',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: background,
    },
    image: {
      width: '100%',
    },
  };

  return (
    <Box
      css={styles.container}
    >
      <Box
        data-testid="job-image"
        as="img"
        src={data.jobTitle.imageUrl}
        alt="job image"
        css={styles.image}
      />
      <JobTitle
        title={data.jobTitle.name}
        name={data.company.name}
      />
      <Headline
        distance={data.milesToTravel}
        wage={data.wagePerHourInCents / 100}
      />
    </Box>
  );
};

export default Body;
