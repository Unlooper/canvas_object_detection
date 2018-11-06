import util from 'gulp-util';
import del from 'del';

let isWatching = false;

export function setWatching() {
  isWatching = true;
}

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
export function log(message) {
  if (typeof(message) === 'object') {
    for (let item in message) {
      if (message.hasOwnProperty(item)) {
        util.log(util.colors.blue(message[item]));
      }
    }
  } else {
    util.log(util.colors.blue(message));
  }
}

/**
 * Delete all files in a given path
 * @param {Array} path - Array of paths to delete
 */
export function clean(path) {
  let options = {
    force: true
  };
  return del(path, options);
}
