const form = document.forms[0];
const titleField = document.querySelector('#title') as HTMLInputElement;
const isbnField = document.querySelector('#isbn') as HTMLInputElement;
const authorField = document.querySelector('#author') as HTMLInputElement;

import { CreateBook } from '../server/db/book';

fetch('http://localhost:8080/authors', { method: 'GET' })
    .then((res) => res.json())
    .then((authors) => {
        authors.forEach((author: any) => {
            const option = document.createElement('option');
            option.setAttribute('value', author.id);
            option.textContent = author.name;
            authorField.appendChild(option);
        });
    });

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const book: CreateBook = {
        title: titleField.value,
        ISBN: isbnField.value,
        authorId: +authorField.value,
    };
    fetch('http://localhost:8080/books', {
        method: 'POST',
        body: JSON.stringify(book),
    })
        .then(() => {
            titleField.value = '';
            isbnField.value = '';
            authorField.value = '';
        })
        .catch((err) => console.error(err));
});
