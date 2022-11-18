import mnemonic from 'bitcore-mnemonic';

/**
 * Checks if passphrase is valid using mnemonic
 *
 * @param {string} passphrase
 * @returns {bool} isValidPassphrase
 */
export const validatePassphrase = (passphrase) => {
  const normalizedValue = passphrase.replace(/ +/g, ' ').trim();
  let isValid;
  try {
    isValid =
      normalizedValue.split(' ').length >= 12 &&
      mnemonic.isValid(normalizedValue);
  } catch (e) {
    // If the mnemonic check throws an error, we assume that the
    // passphrase being entered isn't valid
    isValid = false;
  }
  console.log('isValid', isValid);
  console.log('passphrase', passphrase);
  return isValid;
};

export const inDictionary = (word) =>
  mnemonic.Words.ENGLISH.indexOf(word) !== -1;
