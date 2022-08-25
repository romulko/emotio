import moment, { Moment } from 'moment';

export const formatIdToDateTime = (id: string) =>
  formatDateTime(moment.utc(parseInt(id.substr(0, 8), 16) * 1000).local());

const formatDateTime = (date?: Moment) => date?.format('DD/MM/YYYY HH:mm');
