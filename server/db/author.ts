import prisma from '../client';

export interface CreateAuthor {
    name: string;
}

export async function createAuthor(author: CreateAuthor) {
    if (author.name === '') return new Error('Name is required');
    return await prisma.author.create({
        data: author,
    });
}

export async function getAuthors() {
    return await prisma.author.findMany();
}

export async function filterAuthorById(id: number) {
    try {
        return await prisma.author.findFirst({ where: { id } });
    } catch (err) {
        console.error(err);
    }
}
