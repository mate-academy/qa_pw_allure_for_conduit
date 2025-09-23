import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { signInUser } from '../../../src/ui/actions/auth/signInUser';
import { logOutUser } from '../../../src/ui/actions/auth/logOutUser';

test('Sign up, Sign out, Sign in', async ({
  homePage,
  settingsPage,
  page,
  user,
}) => {
  await signUpUser(page, user);
  await logOutUser(page);
  await signInUser(page, user);
});
