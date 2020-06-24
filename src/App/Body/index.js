// @flow
import * as React from 'react';

import Box from 'components/Box';
import ListItem from 'components/ListItem';
import { background } from 'utils/colors';

import Buttons from './Buttons';
import Headline from './Headline';
import JobTitle from './JobTitle';
import Location from './Location';
import ReportsTo from './ReportsTo';
import Requirements from './Requirements';
import ShiftDates from './ShiftDates';

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
            <ShiftDates
              shifts={data.shifts}
            />
          </ListItem>
          <ListItem
            prefixIcon="map-marker"
            suffixIcon="chevron-right"
          >
            <Location
              location={data.company.address.formattedAddress}
              distance={data.milesToTravel}
            />
          </ListItem>
          {data.requirements && (
            <ListItem
              prefixIcon="hammer-screwdriver"
            >
              <Requirements items={data.requirements} />
            </ListItem>
          )}
          <ListItem
            prefixIcon="account-circle"
          >
            <ReportsTo
              name={data.company.reportTo.name}
              phone={data.company.reportTo.phone}
            />
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
