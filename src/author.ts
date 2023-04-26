const form = document.forms[0];
const nameField = document.querySelector('#name') as HTMLInputElement;
import { CreateAuthor } from '../server/db/author';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const author: CreateAuthor = { name: nameField.value };
    fetch('http://localhost:8080/author', {
        method: 'POST',
        body: JSON.stringify(author),
    })
        .then(() => {
            nameField.value = '';
        })
        .catch((err) => console.error(err));
});
