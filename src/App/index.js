// @flow
import * as React from 'react';
import ConfettiGenerator from 'confetti-js';

import Box from 'components/Box';
import MessageModal from 'components/MessageModal';
import {
  getProfile,
  getMatches,
  acceptJob,
  rejectJob,
} from 'utils/service';

import Banner from './Banner';
import Body from './Body';
import Header from './Header';

const userId = '7f90df6e-b832-44e2-b624-3143d428001f';

const App = (): React.Node => {
  const [profile, setProfile] = React.useState<ProfileT | void>();
  const [currJob, setCurrJob] = React.useState<number>(0);
  const [matches, setMatches] = React.useState();
  const [error, setError] = React.useState<string | void>();
  const [jobAccepted, setJobAccepted] = React.useState(false);
  const [noJobsLeft, setNoJobsLeft] = React.useState(false);

  const showNextJob = () => {
    if (matches && currJob !== matches.length - 1) {
      setCurrJob((pJob) => pJob + 1);
    } else {
      setNoJobsLeft(true);
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
    setError();
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
    }).catch((err) => {
      setError(err.message);
      showNextJob();
    });
  };

  const reject = (jobId) => {
    setError();
    rejectJob(userId, jobId).then(() => {
      showNextJob();
    }).catch((err) => {
      setError(err.message);
      showNextJob();
    });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
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
        {error && (
          <Banner>
            {error}
          </Banner>
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
      {jobAccepted && (
        <MessageModal>
          You got the job!
        </MessageModal>
      )}
      {noJobsLeft && (
        <MessageModal>
          There are no more jobs available, better luck next time :(
        </MessageModal>
      )}
    </>
  );
};

export default App;
