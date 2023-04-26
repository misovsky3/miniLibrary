import prisma from './client';

export async function create() {
    return await prisma.user.create({
        data: {
            name: 'Benjamin Bergstrom',
            email: 'benjamin@imgay.com',
        },
    });
}

export async function remove() {
    return await prisma.user.deleteMany();
}
