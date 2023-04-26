"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterAuthorById = exports.getAuthors = exports.createAuthor = void 0;
const client_1 = __importDefault(require("../client"));
async function createAuthor(author) {
    if (author.name === '')
        return new Error('Name is required');
    return await client_1.default.author.create({
        data: author,
    });
}
exports.createAuthor = createAuthor;
async function getAuthors() {
    return await client_1.default.author.findMany();
}
exports.getAuthors = getAuthors;
async function filterAuthorById(id) {
    try {
        return await client_1.default.author.findFirst({ where: { id } });
    }
    catch (err) {
        console.error(err);
    }
}
exports.filterAuthorById = filterAuthorById;
