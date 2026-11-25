import { faker } from '@faker-js/faker';

export function generateNewUserData(logger = null) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const user = {
    username: `${firstName}_${lastName}`.replaceAll(`'`, '').toLowerCase(),
    email: `${firstName}_${faker.internet.email()}`.toLowerCase(),
    password: faker.internet.password(),
  };

  if (logger) {
    logger.debug(`Generated new user data: ${JSON.stringify(user)}`);
  }
  return user;
}

export function generateNewUsername() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const newUsername = `${firstName}_${lastName}`.replaceAll(`'`, '').toLowerCase();

  return newUsername;
}

export function generateNewEmail() {
  const newEmail = faker.internet.email().toLowerCase();

  return newEmail;
}

export function generateNewPassword() {
  const newPassword = faker.internet.password();

  return newPassword;
}

export function generateBio() {
  const bio = faker.lorem.sentences(3);

  return bio;
}

export function generateUrlPicture() {
  const url = faker.image.url();

  return url;
}