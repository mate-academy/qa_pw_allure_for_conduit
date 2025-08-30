import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  const testFolder = 'tests/';

  // normalize path separators and get the part after "tests/"
  const normalized = String(fileName || '').replace(/\\/g, '/');
  const cutAt = normalized.indexOf(testFolder);
  const tail = cutAt >= 0 
  ? normalized.slice(cutAt + testFolder.length) : normalized;

  const attributesCamelCase = tail.split('/').filter(Boolean);

  let attributes = attributesCamelCase
  .map(a => capitalize(camelCaseToPhrase(a)));

  // guard against undefined; trim filename-level node if it's a spec file
  if (attributes[2] && attributes[2].includes('.spec')) {
    attributes = attributes.slice(0, 2);
  }

  logger?.debug?.(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}