import prisma from '../client';

export interface CreateBook {
    title: string;
    ISBN: string;
    authorId: number;
}

export async function createBook(book: CreateBook) {
    if (book.title === '') return new Error('Title is required');
    if (book.ISBN === '') return new Error('ISBN is required');

    return await prisma.book.create({ data: book });
}

export async function getBooks() {
    return await prisma.book.findMany();
}
