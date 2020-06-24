// @flow
import * as React from 'react';

import Typography from 'components/Typography';

type PropsT = {
  name: string,
  phone?: string,
};

const ReportsTo = ({
  name,
  phone = '',
}: PropsT): React.Node => (
  <>
    <Typography variant="label">
      Reports To
    </Typography>
    <Typography>
      {`${name} ${phone}`}
    </Typography>
  </>
);

export default ReportsTo;
