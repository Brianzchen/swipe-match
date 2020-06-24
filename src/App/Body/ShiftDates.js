// @flow
import * as React from 'react';

import Typography from 'components/Typography';

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
        {`${new Date(startDate).toLocaleTimeString()} - ${new Date(endDate).toLocaleTimeString()}`}
      </Typography>
    ))}
  </>
);

export default ShiftDates;
