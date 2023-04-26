import { prismaMock } from '../singleton';
import { createUser } from '../db/user';

test('should create a new user', async () => {
    const time = new Date();
    const user = {
        id: 1,
        name: 'Benjamin Bergstrom',
        email: 'benjamin@iamgay.com',
        createdAt: time,
        updatedAt: time,
    };

    prismaMock.user.create.mockResolvedValue(user);

    await expect(createUser(user)).resolves.toEqual({
        id: 1,
        name: 'Benjamin Bergstrom',
        email: 'benjamin@iamgay.com',
        createdAt: time,
        updatedAt: time,
    });
});

test('should fail if user does not provide email', async () => {
    const time = new Date();
    const user = {
        id: 1,
        name: 'Benjamin Bergstrom',
        email: '',
        createdAt: time,
        updatedAt: time,
    };

    prismaMock.user.create.mockImplementation();

    await expect(createUser(user)).resolves.toEqual(
        new Error('Email is required')
    );
});

test('should fail if user does not provide name', async () => {
    const time = new Date();
    const user = {
        id: 1,
        name: '',
        email: 'benjamin@iamgay.com',
        createdAt: time,
        updatedAt: time,
    };

    prismaMock.user.create.mockImplementation();

    await expect(createUser(user)).resolves.toEqual(
        new Error('Name is required')
    );
});
