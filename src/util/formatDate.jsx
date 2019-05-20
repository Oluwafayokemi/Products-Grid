/**
 * @file formatDate
 */

/**
 * @function formatDate
 * @description converts date to customize date string
 * @param {String} time 
 */
export const formatDate = (time) => {
  const timeAgo = new Date(time);
  if (Object.prototype.toString.call(timeAgo) === "[object Date]") {
    if (isNaN(timeAgo.getTime())) {
      return 'Not Valid';
    } else {
      const seconds = Math.floor((new Date() - timeAgo) / 1000),
        intervals = [
          Math.floor(seconds / 31536000),
          Math.floor(seconds / 2592000),
          Math.floor(seconds / 604800),
          Math.floor(seconds / 86400),
          Math.floor(seconds / 3600),
          Math.floor(seconds / 60)
        ],
        times = [
          'year',
          'month',
          'week',
          'day',
          'hour',
          'minute'
        ];

      let key;
      for (key in intervals) {
        if (intervals[key] + ' ' + times[key] === '2 week') {
          return timeAgo.toDateString()
        }
        if (intervals[key] > 1) {
          return intervals[key] + ' ' + times[key] + 's ago';
        }
        else if (intervals[key] === 1) {
          return intervals[key] + ' ' + times[key] + ' ago';
        }
      }
      return Math.floor(seconds) + ' seconds ago';
    }
  } else {
    return 'Not Valid';
  }
}

