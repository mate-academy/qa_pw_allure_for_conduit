import { camelToUnderscore, capitalize } from './stringHelpers';

export function parseTestTreeAttributes(fileName, logger) {
  const testFolder = 'tests/';

  let [parentSuite, suite, subSuite] = fileName
    .substring(fileName.indexOf(testFolder) + testFolder.length)
    .split('/');

  let attributes = [parentSuite, suite, subSuite].map(x =>
    camelToUnderscore(capitalize(x)),
  );

  if (attributes[2].includes('.spec.js')) {
    attributes = attributes.slice(0, 2);
  }

  logger.debug(`Parsed test hierarchy: ${attributes}`);

  return attributes;
}
