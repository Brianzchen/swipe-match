// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

import { inverse } from 'utils/colors';

import Box from '../Box';
import Typography from '../Typography';

type PropsT = {
  children: React.Node,
};

const MessageModal = ({
  children,
}: PropsT): React.Node => {
  const { body } = document;

  if (!body) return null;

  const styles = {
    background: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      color: inverse,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    message: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      textAlign: 'center',
    },
  };

  return ReactDOM.createPortal(
    <Box
      css={styles.background}
    >
      <Typography
        css={styles.message}
        variant="heading2"
      >
        {children}
      </Typography>
    </Box>,
    body,
  );
};

export default MessageModal;
