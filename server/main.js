"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.create = void 0;
const client_1 = __importDefault(require("./client"));
async function create() {
    return await client_1.default.user.create({
        data: {
            name: 'Benjamin Bergstrom',
            email: 'benjamin@imgay.com',
        },
    });
}
exports.create = create;
async function remove() {
    return await client_1.default.user.deleteMany();
}
exports.remove = remove;
