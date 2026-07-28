import { faker } from '@faker-js/faker';

/**
 * @param {import('../logger/Logger').Logger | null} [logger]
 * @param {number} [tagNumber]
 */
export function generateNewArticleData(logger = null, tagNumber = 0) {
  const tags = Array.from({ length: tagNumber }, () => faker.lorem.word());

  const article = {
    title: faker.lorem.words(5),
    description: faker.lorem.sentence(4),
    text: faker.lorem.sentences(2),
    tags,
  };

  if (logger) {
    logger.debug(`Generated new article data: ${JSON.stringify(article)}`);
  }

  return article;
}
