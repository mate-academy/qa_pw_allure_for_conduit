import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

const imageUrl = 'https://randomuser.me/api/portraits/lego/1.jpg';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  page,
  settingsPage,
}) => {
  await settingsPage.open();
  await settingsPage.fillImageUrlField(imageUrl);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.assertImageUrlFieldHasValue(imageUrl);
});
