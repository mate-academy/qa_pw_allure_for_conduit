import path from 'path';
import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  const testFolder = `tests${path.sep}`; // używamy separatora OS

  // Wyciągamy część ścieżki po folderze 'tests'
  const relativePath = fileName.substring(
    fileName.indexOf(testFolder) + testFolder.length,
  );

  // Dzielimy ścieżkę po separatorze systemowym
  const attributesRaw = relativePath.split(path.sep);

  // Zamiana camelCase na frazy i kapitalizacja
  let attributes = attributesRaw.map(attr =>
    capitalize(camelCaseToPhrase(attr)),
  );

  // Sprawdzenie, czy trzeci element istnieje
  if (attributes[2] && attributes[2].includes('.spec.js')) {
    attributes = attributes.slice(0, 2);
  }

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}
