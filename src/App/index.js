// @flow
import * as React from 'react';
import styled from 'styled-components';

import { getProfile, getMatches } from 'utils/service';

import Body from './Body';
import Header from './Header';

const userId = '7f90df6e-b832-44e2-b624-3143d428001f';

const Container = styled.div`
  height: 100%;
`;

const App = (): React.Node => {
  const [profile, setProfile] = React.useState<ProfileT | void>();
  const [currJob] = React.useState<number>(0);
  const [matches, setMatches] = React.useState();

  React.useEffect(() => {
    getProfile(userId).then((res) => {
      setProfile(res);
    });
    getMatches(userId).then((res) => {
      setMatches(res);
    });
  }, []);

  return (
    <Container data-testid="container">
      {profile && (
        <Header
          firstName={profile.firstName}
          lastName={profile.lastName}
        />
      )}
      {matches && (
        <Body
          data={matches[currJob]}
        />
      )}
    </Container>
  );
};

export default App;
