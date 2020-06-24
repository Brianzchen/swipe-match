// @flow
import * as React from 'react';

import Box from 'components/Box';
import { tertiary } from 'utils/colors';

type PropsT = {
  children: React.Node,
  prefixIcon: string,
  suffixIcon?: string,
};

const ListItem = ({
  children,
  prefixIcon,
  suffixIcon,
}: PropsT): React.Node => {
  const styles = {
    container: {
      display: 'flex',
      borderTop: `1px solid ${tertiary}`,
      margin: '0 16px',
      padding: '16px 0',
      ':first-child': {
        borderTopColor: 'transparent',
      },
      ':last-child': {
        borderBottomColor: 'transparent',
      },
    },
    body: {
      flex: 1,
    },
    icon: {
      fontSize: '32px',
      ':first-child': {
        marginRight: '24px',
      },
      ':last-child': {
        marginLeft: '24px',
      },
    },
  };

  return (
    <Box css={styles.container}>
      <Box
        data-testid="list-item-prefix-icon"
        as="i"
        className={`mdi mdi-${prefixIcon}`}
        css={styles.icon}
      />
      <Box
        data-testid="list-item-body"
        css={styles.body}
      >
        {children}
      </Box>
      {suffixIcon && (
        <Box
          data-testid="list-item-suffix-icon"
          as="i"
          className={`mdi mdi-${suffixIcon}`}
          css={styles.icon}
        />
      )}
    </Box>
  );
};

export default ListItem;
