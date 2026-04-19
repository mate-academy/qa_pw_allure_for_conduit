import { mergeTests } from '@playwright/test';
import { test as authTest } from './fixturesAuth';
import { test as genericTest } from './fixturesGeneric';
import { test as articleTest } from './fixturesArticle';
import { test as profileTests } from './fixtureProfile';

export const test = mergeTests(authTest, genericTest, articleTest, profileTests);
