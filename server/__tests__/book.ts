import { createBook } from '../db/book';
import { prismaMock } from '../singleton';

test('should create a new book', async () => {
    const time = new Date();

    const author = { id: 1, name: 'Random Guy' };
    prismaMock.author.create({ data: author });

    const book = {
        id: 1,
        title: 'How to Kill Yourself',
        ISBN: '9000',
        authorId: author.id,
        createdAt: time,
        updatedAt: time,
    };
    prismaMock.book.create.mockResolvedValue(book);

    await expect(createBook(book)).resolves.toEqual({
        id: 1,
        title: 'How to Kill Yourself',
        ISBN: '9000',
        authorId: author.id,
        createdAt: time,
        updatedAt: time,
    });
});

test('should fail if user leaves title empty', async () => {
    const time = new Date();

    const author = { id: 1, name: 'Random Guy' };
    prismaMock.author.create({ data: author });

    const book = {
        id: 1,
        title: '',
        ISBN: '9000',
        authorId: author.id,
        createdAt: time,
        updatedAt: time,
    };
    prismaMock.book.create.mockResolvedValue(book);

    await expect(createBook(book)).resolves.toEqual(
        new Error('Title is required')
    );
});

test('should fail if user leaves ISBN empty', async () => {
    const time = new Date();

    const author = { id: 1, name: 'Random Guy' };
    prismaMock.author.create.mockResolvedValue(author);

    const book = {
        id: 1,
        title: 'How to Kill Yourself',
        ISBN: '',
        authorId: author.id,
        createdAt: time,
        updatedAt: time,
    };
    prismaMock.book.create.mockResolvedValue(book);

    await expect(createBook(book)).resolves.toEqual(
        new Error('ISBN is required')
    );
});

test('should fail if user posts a book with an identical ISBN', async () => {
    const time = new Date();

    const author = { id: 1, name: 'Random Guy' };
    prismaMock.author.create.mockResolvedValue(author);

    const book = {
        id: 1,
        title: 'How to Kill Yourself',
        ISBN: '9000',
        authorId: author.id,
        createdAt: time,
        updatedAt: time,
    };
    prismaMock.book.create.mockResolvedValue(book);

    const book2 = {
        id: 1,
        title: 'Unrelated Book',
        ISBN: '9000',
        authorId: author.id,
        createdAt: time,
        updatedAt: time,
    };
    prismaMock.book.create.mockResolvedValue(book);

    await expect(createBook(book2)).resolves.toEqual(
        new Error('ISBN already in use')
    );
});
