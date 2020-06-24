// @flow
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export default (start: string, end: string): string => {
  const timeZone = 'America/Los_Angeles';
  const startDate = utcToZonedTime(new Date(start), timeZone);
  const parsedStart = format(startDate, 'LLL d, EEE p');
  const endDate = utcToZonedTime(new Date(end), timeZone);
  const parsedEnd = format(endDate, 'p');

  return `${parsedStart} - ${parsedEnd} PDT`.toUpperCase();
};
