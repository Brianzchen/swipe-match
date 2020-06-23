// @flow
import * as React from 'react';

import Box from 'components/Box';
import { background } from 'utils/colors';

import Buttons from './Buttons';
import Headline from './Headline';
import JobTitle from './JobTitle';
import ListItem from './ListItem';

type PropsT = {
  data: JobMatchT,
  accept: Function,
  reject: Function,
};

const Body = ({
  data,
  accept,
  reject,
}: PropsT): React.Node => {
  const styles = {
    container: {
      flex: 1,
      margin: '8px',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    wrapper: {
      maxHeight: '100%',
      overflow: 'auto',
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
      <Box css={styles.wrapper}>
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
        <Box>
          <ListItem
            prefixIcon="calendar"
          >
            test
          </ListItem>
          <ListItem
            prefixIcon="map-marker"
            suffixIcon="chevron-right"
          >
            test
          </ListItem>
          <ListItem
            prefixIcon="hammer-screwdriver"
          >
            test
          </ListItem>
          <ListItem
            prefixIcon="account-circle"
          >
            test
          </ListItem>
        </Box>
        <Buttons
          jobId={data.jobId}
          accept={accept}
          reject={reject}
        />
      </Box>
    </Box>
  );
};

export default Body;
