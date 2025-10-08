import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  if (!fileName) return ['', '', ''];

  const testFolder = 'tests/';
  const normalizedPath = fileName.replace(/\\/g, '/');

  const index = normalizedPath.indexOf(testFolder);
  if (index === -1) {
    logger?.warn?.(`Test folder "${testFolder}" not found in fileName: ${fileName}`);
    return ['', '', ''];
  }

  const relativePath = normalizedPath.substring(index + testFolder.length);
  const segments = relativePath.split('/').filter(Boolean);

  // Remove filename extensions: .spec|.test + js/ts/jsx/tsx
  const lastIndex = segments.length - 1;
  segments[lastIndex] = segments[lastIndex].replace(/\.(spec|test)\.(js|ts|jsx|tsx)$/, '');

  const attributes = segments.map(attr => capitalize(camelCaseToPhrase(attr)));
  logger?.debug?.(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  const parentSuite = attributes[0] || '';
  const suite = attributes[1] || '';
  const subSuite = attributes.length > 2 ? attributes.slice(2).join(' / ') : '';

  return [parentSuite, suite, subSuite];
}
