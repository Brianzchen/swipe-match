// @flow
import * as React from 'react';
import ConfettiGenerator from 'confetti-js';

import Box from 'components/Box';
import {
  getProfile,
  getMatches,
  acceptJob,
  rejectJob,
} from 'utils/service';

import Body from './Body';
import Header from './Header';

const userId = '7f90df6e-b832-44e2-b624-3143d428001f';

const App = (): React.Node => {
  const [profile, setProfile] = React.useState<ProfileT | void>();
  const [currJob, setCurrJob] = React.useState<number>(0);
  const [matches, setMatches] = React.useState();
  const [jobAccepted, setJobAccepted] = React.useState(false);

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
      if (!jobAccepted) {
        setJobAccepted(true);
        const confettiSettings = {
          target: 'my-canvas',
          max: 200,
        };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      }
    }).catch(() => {
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

  const styles = {
    container: {
      height: '100%',
      pointerEvents: jobAccepted ? 'none' : 'auto',
    },
    confetti: {
      position: 'fixed',
      zIndex: 1,
      top: 0,
      left: 0,
    },
  };

  return (
    <>
      <Box
        data-testid="container"
        css={styles.container}
      >
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
      </Box>
      <Box
        as="canvas"
        id="my-canvas"
        css={styles.confetti}
      />
    </>
  );
};

export default App;
