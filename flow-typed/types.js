declare type AddressT = {
  formattedAddress: string,
  zoneId: string,
};

declare type ProfileT = {
  address: AddressT,
  email: string,
  firstName: string,
  lastName: string,
  maxJobDistance: number,
  phoneNumber: string,
  workerId: string,
};

declare type JobMatchT = {
  branch: string,
  branchPhoneNumber: string,
  company: {
    address: AddressT,
    name: string,
    reportTo: {
      name: string,
      phone: string,
    },
  },
  jobId: string,
  jobTitle: {
    imageUrl: string,
    name: string,
  },
  milesToTravel: number,
  shifts: Array<{
    endDate: string,
    startDate: string,
  }>,
  wagePerHourInCents: number,
};

declare type JobMatchesT = Array<JobMatchT>
