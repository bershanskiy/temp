'use strict';
import { faker } from '@faker-js/faker';

const categoryCount = 100, storyCount = 20;

export function init(seed = 123) {
    faker.seed(seed);
    return {
        categories: createRandomCategories(categoryCount),
        stories: createRandomStories(categoryCount, storyCount),
    }
}

export function createRandomCategories(count: number = 100) {
    const categories: Array<{id: number, title: string}> = [];
    // id === 0 is reserved as sentinel
    for (let i = 1; i <= count; i++) {
        categories.push({
            id: i,
            title: faker.word.adjective()
        });
    }
    return categories;
}

export function createRandomStories(categoryCount: number, count: number) {
    const stories: Array<{id: number, image: number, title: string, date: number, fullDescription: string, text: string, likes: number, category: number}> = [];
    for (let i = 0; i < count; i++) {
        stories.push({
            id: i,
            image: faker.datatype.number({min: 1, }),
            title: faker.datatype.string(100),
            date: faker.datatype.number({min: 0, max: Date.now()}),
            fullDescription: faker.datatype.string(100),
            text: faker.datatype.string(100),
            likes: faker.datatype.number({min: 0, max: 2000000}),
            category: faker.datatype.number({min: 1, max: categoryCount}),
        });
    }
    return stories;
}
