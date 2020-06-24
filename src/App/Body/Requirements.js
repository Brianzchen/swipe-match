// @flow
import * as React from 'react';

import Typography from 'components/Typography';

type PropsT = {
  items: Array<string>,
};

const Requirements = ({
  items,
}: PropsT): React.Node => (
  <>
    <Typography variant="label">
      Requirements
    </Typography>
    {items.map((o) => (
      <Typography key={o}>
        {`- ${o}`}
      </Typography>
    ))}
  </>
);

export default Requirements;
