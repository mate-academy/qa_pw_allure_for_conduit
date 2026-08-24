import { faker } from '@faker-js/faker';

export function generateNewEmail() {
  return faker.internet.email().toLowerCase();
}

export function generateNewUsername() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return `${firstName}_${lastName}`.replaceAll(`'`).toLowerCase();
}

export function generateNewPassword() {
  return faker.internet.password();
}

export function generateProfileImageUrl() {
  return faker.image.url();
}

export function generateBioText() {
  return faker.lorem.sentence(4);
}

export function generateNewUserData(logger = null) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const user = {
    username: `${firstName}_${lastName}`.replaceAll(`'`).toLowerCase(),
    email: `${firstName}_${faker.internet.email()}`.toLowerCase(),
    password: faker.internet.password(),
  };

  if (logger) {
    logger.debug(`Generated new user data: ${JSON.stringify(user)}`);
  }
  return user;
}
