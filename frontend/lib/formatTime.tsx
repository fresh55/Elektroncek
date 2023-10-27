import dayjs from 'dayjs';

/**
 * Formats a date as a string in the format used by the application.
 * @param date The date to format.
 * @returns A string in the application date format.
 */
export const formatDate = (date?: Date, format = 'MMMM D') => {
    return dayjs(date).format(format);
  };
  