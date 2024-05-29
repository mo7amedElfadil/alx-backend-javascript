import { uploadPhoto, createUser } from './utils';

/**
 * resolve all promises and log the results
 * body of the photo, first name, and last name
 * @returns {undefined}
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
