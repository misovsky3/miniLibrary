"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsername = exports.createUser = void 0;
const client_1 = __importDefault(require("../client"));
async function createUser(user) {
    if (user.name === '')
        return new Error('Name is required');
    if (user.email === '')
        return new Error('Email is required');
    return await client_1.default.user.create({
        data: user,
    });
}
exports.createUser = createUser;
async function updateUsername(user) {
    return await client_1.default.user.update({
        where: { id: user.id },
        data: user,
    });
}
exports.updateUsername = updateUsername;
