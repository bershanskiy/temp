'use strict';
import { faker } from '@faker-js/faker';

export function init(seed = 123) {
    faker.seed(123);
    return {
        categories: createRandomCategories(100),
        getAtriclesPage: () => {},
        getArticle: (articleId) => {}
    }
}

function createRandomCategories(count) {
    return faker.word.adjective(count);
}
