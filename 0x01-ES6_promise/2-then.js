/**
 * handleResponseFromAPI has 3 handlers
 * 1. resolve - status code 200 body is 'success'
 * 2. reject - returns empty Error object
 * 3. finally - logs 'Got a response from the API'
 * @param {Promise} promise
 * @return {Promise}
 */
export default async function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
