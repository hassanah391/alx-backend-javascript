module.exports = function displayMessage(message) {
  if (typeof message !== 'string') {
    throw new Error('Message must be a string');
  }
  console.log(message);
};
