/**
 * signUpUser - This function should return a promise that resolves with the user object
 * @param {string} firstName
 * @param {string} lastName
 * @returns {Promise<{firstName: string, lastName: string}>}
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
