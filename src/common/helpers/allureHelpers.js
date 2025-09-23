import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  //console.log(fileName);
  const normalizedFileName = fileName.replace(/\\/g, '/');
  //console.log(normalizedFileName);
  const testFolder = 'tests/';

  const attributesCamelCase = normalizedFileName
    .substring(normalizedFileName.indexOf(testFolder) + testFolder.length)
    .split('/');

  let attributes = attributesCamelCase.map(attribute =>
    capitalize(camelCaseToPhrase(attribute)),
  );

  if (attributes[2].includes('.spec.js')) {
    attributes = attributes.slice(0, 2);
  }

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}
