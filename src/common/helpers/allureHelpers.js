import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  const testFolder = 'tests/';

  // Normalize path separators for Windows
  const normalizedPath = fileName.replace(/\\/g, '/');

  const index = normalizedPath.indexOf(testFolder);
  if (index === -1) {
    logger.warn(`Test folder "${testFolder}" not found in fileName: ${fileName}`);
    return ['', '', ''];
  }

  // Get relative path from tests/ folder
  const relativePath = normalizedPath.substring(index + testFolder.length);
  const segments = relativePath.split('/');

  // Remove file name
  const fileNameSegment = segments[segments.length - 1];
  const cleanedSegments = fileNameSegment.replace(/\.spec\.(js|ts)$/, '');
  segments[segments.length - 1] = cleanedSegments;

  // Convert to readable names
  const attributes = segments.map(attr => capitalize(camelCaseToPhrase(attr)));

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  // Return in expected fixture format: [parentSuite, suite, subSuite?]
  const parentSuite = attributes[0] || '';
  const suite = attributes[1] || '';
  const subSuite = attributes.length > 2 ? attributes.slice(2).join(' / ') : undefined;

  return [parentSuite, suite, subSuite];
}
