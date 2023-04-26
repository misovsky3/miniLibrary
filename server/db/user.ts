import prisma from '../client';

export interface CreateUser {
    name: string;
    email: string;
}

export async function createUser(user: CreateUser) {
    if (user.name === '') return new Error('Name is required');
    if (user.email === '') return new Error('Email is required');

    return await prisma.user.create({
        data: user,
    });
}

interface UpdateUser {
    id: number;
    name: string;
    email: string;
}

export async function updateUsername(user: UpdateUser) {
    return await prisma.user.update({
        where: { id: user.id },
        data: user,
    });
}
