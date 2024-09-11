import type Colors from '@/enums';

export interface Event {
  id: string | number,
  title: string,
  description: string,
  start: string,
  end: string,
  calendarId: Colors,
}
