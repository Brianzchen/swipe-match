// @flow
import React from 'react';
import { render } from '@testing-library/react';

import Body from '.';

describe('<Body />', () => {
  const props = {
    data: {
      jobId: '5775d8e18a488e6c5bb08333',
      jobTitle: {
        name: 'Construction General Helper',
        imageUrl: 'https://imgs.swipejobs.com/js/job-category/construction-1.jpg',
      },
      company: {
        name: 'Steve Smith Construction',
        address: {
          formattedAddress: '430 Smith St, Chicago, IL 60654, USA',
          zoneId: 'America/Chicago',
        },
        reportTo: {
          name: 'Judy Smith',
          phone: '2130010012',
        },
      },
      wagePerHourInCents: 950,
      milesToTravel: 3.4,
      shifts: [
        {
          startDate: '2019-09-04T21:00:00Z',
          endDate: '2019-09-05T05:00:00Z',
        },
      ],
      branch: 'Downtown',
      branchPhoneNumber: '2531233322',
    },
  };

  it('renders the image', () => {
    const { getByTestId } = render(<Body {...props} />);

    const image: HTMLImageElement = (getByTestId('job-image'): any);

    expect(image.src).toBe(props.data.jobTitle.imageUrl);
    expect(image.alt).toBe('job image');
  });

  it('renders job title', () => {
    const { getByTestId } = render(<Body {...props} />);

    expect(getByTestId('job-title').textContent).toBe(props.data.jobTitle.name);
    expect(getByTestId('job-company-name').textContent).toBe(props.data.company.name);
  });

  it('displays the distance', () => {
    const { getByTestId } = render(<Body {...props} />);

    expect(getByTestId('distance-value').textContent).toBe(`${props.data.milesToTravel} miles`);
  });

  it('displays the hourly rate', () => {
    const { getByTestId } = render(<Body {...props} />);

    expect(getByTestId('hourly-rate-value').textContent).toBe(`$${(props.data.wagePerHourInCents / 100).toFixed(2)}`);
  });
});
