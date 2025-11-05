/**
 * Generates a random string of specified length
 * @param {number} length - The length of the random string to generate
 * @returns {string} Random string of specified length
 */
export function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export function generateRandomEmail() {
  return `${generateRandomString(10)}@example.com`
}
