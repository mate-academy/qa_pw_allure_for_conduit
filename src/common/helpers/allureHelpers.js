import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  const testFolder = 'tests/';

  // Get relative path from tests/ folder
  const relativePath = fileName.substring(fileName.indexOf(testFolder) + testFolder.length);
  const attributesCamelCase = relativePath.split('/');

  // Convert to readable names
  let attributes = attributesCamelCase.map(attr =>
    capitalize(camelCaseToPhrase(attr.replace('.spec.ts', '').replace('.spec.js', '')))
  );

  // Remove file name if it's the last element
  if (attributes.length > 0 && (attributes[attributes.length - 1].endsWith('.spec.js') || attributes[attributes.length - 1].endsWith('.spec.ts'))) {
    attributes.pop();
  }

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  // Return in expected fixture format: [parentSuite, suite, subSuite?]
  const parentSuite = attributes[0] || '';
  const suite = attributes[1] || '';
  const subSuite = attributes.length > 2 ? attributes.slice(2).join(' / ') : undefined;

  return [parentSuite, suite, subSuite];
}
