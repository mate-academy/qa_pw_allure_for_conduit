import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  const testFolder = 'tests/';

  const attributesCamelCase = fileName
    .substring(fileName.indexOf(testFolder) + testFolder.length)
    .split(/[\\/]/);

  let attributes = attributesCamelCase.map(attribute =>
    capitalize(camelCaseToPhrase(attribute)),
  );

  const lastAttribute = attributes[attributes.length - 1];

  if (lastAttribute?.includes('.spec.js')) {
    if (attributes.length === 1) {
      attributes[0] = attributes[0].replace('.spec.js', ''); 
    } else {
      attributes = attributes.slice(0, -1); 
  }
}

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}
