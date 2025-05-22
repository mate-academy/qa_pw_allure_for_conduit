import { mergeTests } from '@playwright/test';
import { test as baseWorkerTest } from './workerSetup';
import { test as authTest } from './fixturesAuth';
import { test as genericTest } from './fixturesGeneric';
import { test as articleTest } from './fixturesArticle';
import { test as settingsTest } from './fixturesSettings';

export const test = mergeTests(
  baseWorkerTest,
  authTest,
  genericTest,
  articleTest,
  settingsTest,
);
