import { uploadPhoto, createUser } from './util';

/**
 * resolve all promises and log the results
 * body of the photo, first name, and last name
 * @returns {undefined}
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
