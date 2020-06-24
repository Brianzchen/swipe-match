// @flow
import * as React from 'react';

import Typography from 'components/Typography';

import getDateRange from './getDateRange';

type PropsT = {
  shifts: Array<{
    endDate: string,
    startDate: string,
  }>,
};

const ShiftDates = ({
  shifts,
}: PropsT): React.Node => (
  <>
    <Typography
      variant="label"
    >
      Shift Dates
    </Typography>
    {shifts.map(({ startDate, endDate }) => (
      <Typography key={`${startDate}-${endDate}`}>
        {getDateRange(startDate, endDate)}
      </Typography>
    ))}
  </>
);

export default ShiftDates;
