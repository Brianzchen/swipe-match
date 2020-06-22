// @flow
import * as React from 'react';

import Box from 'components/Box';
import Typography from 'components/Typography';
import { primary, inverse } from 'utils/colors';

type PropsT = {
  firstName: string,
  lastName: string,
};

const Header = ({
  firstName,
  lastName,
}: PropsT): React.Node => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px',
      padding: '16px',
      color: inverse,
      backgroundColor: primary,
    },
    logo: {
      height: '100%',
    },
  };

  return (
    <Box css={styles.container}>
      <Box
        as="img"
        src="/images/logo-name.png"
        alt="logo name"
        css={styles.logo}
      />
      <Typography
        data-testid="header-name"
        variant="heading3"
      >
        {`${firstName} ${lastName}`}
      </Typography>
    </Box>
  );
};

export default Header;
