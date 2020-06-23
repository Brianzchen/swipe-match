// @flow
import * as React from 'react';
import styled from 'styled-components';

import {
  getProfile,
  getMatches,
  acceptJob,
  rejectJob,
} from 'utils/service';

import Body from './Body';
import Header from './Header';

const userId = '7f90df6e-b832-44e2-b624-3143d428001f';

const Container = styled.div`
  height: 100%;
`;

const App = (): React.Node => {
  const [profile, setProfile] = React.useState<ProfileT | void>();
  const [currJob, setCurrJob] = React.useState<number>(0);
  const [matches, setMatches] = React.useState();

  const showNextJob = () => {
    if (matches && currJob !== matches.length - 1) {
      setCurrJob((pJob) => pJob + 1);
    } else {
      // no more jobs
    }
  };

  React.useEffect(() => {
    getProfile(userId).then((res) => {
      setProfile(res);
    });
    getMatches(userId).then((res) => {
      setMatches(res);
    });
  }, []);

  const accept = (jobId) => {
    acceptJob(userId, jobId).then(() => {
      // show congrats
    }).catch((err) => {
      console.log(err.message);
      // set banner with error and show next job
      showNextJob();
    });
  };

  const reject = (jobId) => {
    rejectJob(userId, jobId).then(() => {
      showNextJob();
    }).catch(() => {
      showNextJob();
    });
    // Show next job or end journey and show sad face
  };

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
          accept={accept}
          reject={reject}
        />
      )}
    </Container>
  );
};

export default App;
