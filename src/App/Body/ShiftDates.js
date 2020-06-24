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
    {shifts.map((o) => (
      <Typography>
        {`${new Date(o.startDate).toLocaleTimeString()} - ${new Date(o.endDate).toLocaleTimeString()}`}
      </Typography>
    ))}
  </>
);

export default ShiftDates;
