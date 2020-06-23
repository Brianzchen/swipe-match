// @flow
import axios from 'axios';

const baseUrl = 'https://test.swipejobs.com/api';

type ResponsePayloadT = {
  success: boolean,
  message: string,
};

export const getProfile = (
  workerId: string,
): Promise<ProfileT> => new Promise((resolve) => {
  axios.get(`${baseUrl}/worker/${workerId}/profile`).then(({ data }) => {
    resolve(data);
  }).catch((err) => {
    console.error(`couldn't get profile: ${err}`);
  });
});

export const getMatches = (
  workerId: string,
): Promise<JobMatchesT> => new Promise((resolve) => {
  axios.get(`${baseUrl}/worker/${workerId}/matches`).then(({ data }) => {
    resolve(data);
  }).catch((err) => {
    console.error(`couldn't get job matches: ${err}`);
  });
});

export const acceptJob = (
  workerId: string,
  jobId: string,
): Promise<ResponsePayloadT> => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/worker/${workerId}/job/${jobId}/accept`).then(({ data }) => {
    if (data.success) {
      resolve(data);
    } else {
      reject(data);
    }
  }).catch((err) => {
    console.error(`couldn't get accept job: ${err}`);
  });
});

export const rejectJob = (
  workerId: string,
  jobId: string,
): Promise<ResponsePayloadT> => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/worker/${workerId}/job/${jobId}/reject`).then(({ data }) => {
    if (data.success) {
      resolve(data);
    } else {
      reject(data);
    }
  }).catch((err) => {
    console.error(`couldn't get reject job: ${err}`);
  });
});
