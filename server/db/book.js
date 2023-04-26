"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = exports.createBook = void 0;
const client_1 = __importDefault(require("../client"));
async function createBook(book) {
    if (book.title === '')
        return new Error('Title is required');
    if (book.ISBN === '')
        return new Error('ISBN is required');
    return await client_1.default.book.create({ data: book });
}
exports.createBook = createBook;
async function getBooks() {
    return await client_1.default.book.findMany();
}
exports.getBooks = getBooks;
