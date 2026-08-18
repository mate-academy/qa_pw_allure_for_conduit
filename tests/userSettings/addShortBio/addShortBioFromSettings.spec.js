import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

const bio = 'QA engineer passionate about test automation.';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({ page, settingsPage }) => {
  await settingsPage.open();
  await settingsPage.fillBioField(bio);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.assertBioFieldHasValue(bio);
});
