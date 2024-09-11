import type { Event } from '@/types';

const validateEvent = ({
  id, title, description, start, end, calendarId,
}: Event) => {
  if (!id || !title || !description || !start || !end || !calendarId) {
    return 'All fields are required';
  }

  if (start > end) {
    return 'End date must be greater than start date';
  }

  if (title.length > 30) {
    return 'Title must be less than 30 characters';
  }

  if (description.length > 100) {
    return 'Description must be less than 100 characters';
  }

  return false;
};

export default validateEvent;
