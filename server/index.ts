import fastify from 'fastify';
import { create, remove } from './main';
import cors from '@fastify/cors';
import { CreateUser, createUser } from './db/user';
import {
    CreateAuthor,
    createAuthor,
    filterAuthorById,
    getAuthors,
} from './db/author';
import { CreateBook, createBook, getBooks } from './db/book';
import prisma from './client';

const server = fastify();
server.register(cors);

server.get('/test', async (req, res) => {
    try {
        await create();
        res.send({ message: 'Resource created' });
    } catch (err) {
        console.error('shit');
        res.status(500).send({ message: err });
    }
});

server.get('/delete', async (req, res) => {
    await remove();
    res.send('deleted');
});

server.post('/user', async (request, reply) => {
    try {
        const body: CreateUser = JSON.parse(request.body as any);
        await createUser(body);
        reply.send(body);
    } catch (err) {
        console.error(err);
    }
});

server.post('/books', async (request, reply) => {
    try {
        const body: CreateBook = JSON.parse(request.body as any);
        await createBook(body);
        reply.send(body);
    } catch (err) {
        console.error(err);
    }
});

server.post('/author', async (request, reply) => {
    console.log(request.body);
    try {
        const body: CreateAuthor = JSON.parse(request.body as any);
        await createAuthor(body);
        reply.send(body);
    } catch (err) {
        console.error(err);
    }
});

server.get('/authors', async (request, reply) => {
    try {
        const authors = await getAuthors();
        reply.send(authors);
    } catch {
        reply.send({ message: 'Something went awry' });
    }
});

server.get('/authors/:id', async (request, reply) => {
    const res = await prisma.author.findFirst({ where: { id: 2 } });
    console.log(res);

    const { id } = request.params as any;
    try {
        const author = await filterAuthorById(+id);
        reply.send(author);
    } catch {
        reply.send({ message: 'Something went awry' });
    }
});

server.get('/books', async (request, reply) => {
    try {
        const books = await getBooks();
        reply.send(books);
    } catch {
        reply.send({ message: 'Something went awry' });
    }
});

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
});
