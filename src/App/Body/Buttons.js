// @flow
import * as React from 'react';

import Box from 'components/Box';
import Button from 'components/Button';

type PropsT = {
  accept: Function,
  reject: Function,
};

const Buttons = ({
  accept,
  reject,
}: PropsT): React.Node => {
  const styles = {
    buttonContainer: {
      display: 'flex',
      padding: '12px',
    },
    button: {
      flex: 1,
      margin: '0 4px',
    },
  };

  return (
    <Box
      css={styles.buttonContainer}
    >
      <Button
        data-testid="reject-job-button"
        css={styles.button}
        variant="secondary"
        onClick={reject}
      >
        No Thanks
      </Button>
      <Button
        data-testid="accept-job-button"
        css={styles.button}
        variant="primary"
        onClick={accept}
      >
        {'I\'ll Take it'}
      </Button>
    </Box>
  );
};

export default Buttons;
