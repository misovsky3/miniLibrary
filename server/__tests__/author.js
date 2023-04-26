"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = require("../db/author");
const singleton_1 = require("../singleton");
test('should create a new author', async () => {
    const author = { id: 1, name: 'Benjamin Bergstrom' };
    singleton_1.prismaMock.author.create.mockResolvedValue(author);
    await expect((0, author_1.createAuthor)(author)).resolves.toEqual({
        id: 1,
        name: 'Benjamin Bergstrom',
    });
});
test('should fail if user does not provide name', async () => {
    const author = { id: 1, name: '' };
    singleton_1.prismaMock.author.create.mockImplementation();
    await expect((0, author_1.createAuthor)(author)).resolves.toEqual(new Error('Name is required'));
});
