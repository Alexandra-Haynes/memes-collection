/**
 * Returns a random number except current
 * @param {number} current - The current index
 * @param {number} total - Upper limit of random number
 * @returns {number}
 */
export const getRandomIndex = (current, total = 5) => {
  const index = Math.floor(Math.random() * total);
  if (index === current) {
    return getRandomIndex(current);
  }
  return index;
};
