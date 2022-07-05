export function hasArrayItems(array) {
  return array?.length > 0;
}

export function replaceMiddlePartOfString(
  string,
  nrOfCharsToKeep,
  replaceText = '...'
) {
  const textToReplace = string.substring(
    nrOfCharsToKeep,
    string.length - nrOfCharsToKeep
  );

  return string.replace(textToReplace, replaceText);
}
