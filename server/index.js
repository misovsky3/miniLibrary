"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const main_1 = require("./main");
const cors_1 = __importDefault(require("@fastify/cors"));
const user_1 = require("./db/user");
const author_1 = require("./db/author");
const book_1 = require("./db/book");
const client_1 = __importDefault(require("./client"));
const server = (0, fastify_1.default)();
server.register(cors_1.default);
server.get('/test', async (req, res) => {
    try {
        await (0, main_1.create)();
        res.send({ message: 'Resource created' });
    }
    catch (err) {
        console.error('shit');
        res.status(500).send({ message: err });
    }
});
server.get('/delete', async (req, res) => {
    await (0, main_1.remove)();
    res.send('deleted');
});
server.post('/user', async (request, reply) => {
    try {
        const body = JSON.parse(request.body);
        await (0, user_1.createUser)(body);
        reply.send(body);
    }
    catch (err) {
        console.error(err);
    }
});
server.post('/books', async (request, reply) => {
    try {
        const body = JSON.parse(request.body);
        await (0, book_1.createBook)(body);
        reply.send(body);
    }
    catch (err) {
        console.error(err);
    }
});
server.post('/author', async (request, reply) => {
    console.log(request.body);
    try {
        const body = JSON.parse(request.body);
        await (0, author_1.createAuthor)(body);
        reply.send(body);
    }
    catch (err) {
        console.error(err);
    }
});
server.get('/authors', async (request, reply) => {
    try {
        const authors = await (0, author_1.getAuthors)();
        reply.send(authors);
    }
    catch (_a) {
        reply.send({ message: 'Something went awry' });
    }
});
server.get('/authors/:id', async (request, reply) => {
    const res = await client_1.default.author.findFirst({ where: { id: 2 } });
    console.log(res);
    const { id } = request.params;
    try {
        const author = await (0, author_1.filterAuthorById)(+id);
        reply.send(author);
    }
    catch (_a) {
        reply.send({ message: 'Something went awry' });
    }
});
server.get('/books', async (request, reply) => {
    try {
        const books = await (0, book_1.getBooks)();
        reply.send(books);
    }
    catch (_a) {
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
