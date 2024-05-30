import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * handleProfileSignup - Handles the profile signup
 * calls signUpUser and uploadPhoto and when promises are settled,
 * returns an array:
 * [
 *  {
 *  status: status_of_the_promise,
 *  value: value_of_error_returned_by_promise
 *  },
 *  ...
 *  ]
 *  @param {string} firstName
 *  @param {string} lastName
 *  @param {string} fileName
 *  @return {Promise} - Array of objects
 */

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((result) => ({
    status: result.status,
    value: result.status === 'rejected' ? result.reason.toString() : result.value,
  })));
}
