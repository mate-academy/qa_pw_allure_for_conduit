import { test as base } from '@playwright/test';
import { 
  deleteFolderAllureReport 
} from '../../src/common/helpers/deleteFolderAllureReport';

export const test = base.extend<{
  clearAllureResults;
}> ({
  clearAllureResults: [
    async ({ }, use) => {
      deleteFolderAllureReport();
      await use('Clear allure results report')

    }, {scope: 'worker', auto: true }
  ],
});
