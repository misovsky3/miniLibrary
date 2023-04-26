import { createAuthor } from '../db/author';
import { prismaMock } from '../singleton';

test('should create a new author', async () => {
    const author = { id: 1, name: 'Benjamin Bergstrom' };

    prismaMock.author.create.mockResolvedValue(author);

    await expect(createAuthor(author)).resolves.toEqual({
        id: 1,
        name: 'Benjamin Bergstrom',
    });
});

test('should fail if user does not provide name', async () => {
    const author = { id: 1, name: '' };

    prismaMock.author.create.mockImplementation();

    await expect(createAuthor(author)).resolves.toEqual(
        new Error('Name is required')
    );
});
