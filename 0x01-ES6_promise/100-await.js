import { uploadPhoto, createUser } from './utils';
/**
 * asyncUploadUser - Uploads a photo and creates a user
 * @return {Promise} A promise that resolves to the user
 */
export default async function asyncUploadUser() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(([photo, user]) => ({ photo, user }))
    .catch((_) => ({ photo: null, user: null }));
}
