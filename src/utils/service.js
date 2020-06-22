// @flow
import axios from 'axios';

const baseUrl = 'https://test.swipejobs.com/api';

export const getProfile = (
  workerId: string,
): Promise<ProfileT> => new Promise((resolve) => {
  axios.get(`${baseUrl}/worker/${workerId}/profile`).then(({ data }) => {
    resolve(data);
  });
});

export const getMatches = (
  workerId: string,
): Promise<JobMatchesT> => new Promise((resolve) => {
  axios.get(`${baseUrl}/worker/${workerId}/matches`).then(({ data }) => {
    resolve(data);
  });
});

// export const acceptJob = (
//   workerId: string,
//   jobId: string,
// ): Promise<{}> => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/worker/${workerId}/job/${jobId}/accept`).then((data) => {

//   });
// });

// export const rejectJob = (
//   workerId: string,
//   jobId: string,
// ): Promise<{}> => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/worker/${workerId}/job/${jobId}/reject`).then((data) => {

//   });
// });
