import { faker } from '@faker-js/faker';

export function generateNewUserData(logger = null) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const user = {
    username: `${firstName}_${lastName}`.replaceAll(`'`, '').toLowerCase(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    bio: faker.lorem.sentences(2),
    avatar: faker.image.avatar(),
  };

  if (logger) {
    logger.debug(`Generated new user data: ${JSON.stringify(user)}`);
  }
  return user;
}
