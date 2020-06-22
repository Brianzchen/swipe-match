// @flow
import * as React from 'react';

import Box from 'components/Box';
import Typography from 'components/Typography';

type PropsT = {
  title: string,
  name: string,
};

const JobTitle = ({
  title,
  name,
}: PropsT): React.Node => {
  const styles = {
    container: {
      padding: '4px 16px',
    },
    text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };

  return (
    <Box css={styles.container}>
      <Typography
        data-testid="job-title"
        css={styles.text}
        variant="heading1"
      >
        {title}
      </Typography>
      <Typography
        data-testid="job-company-name"
        css={styles.text}
        variant="heading2"
      >
        {name}
      </Typography>
    </Box>
  );
};

export default JobTitle;
