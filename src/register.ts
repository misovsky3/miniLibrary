const form = document.forms[0];
const nameField = document.querySelector('#name') as HTMLInputElement;
const emailField = document.querySelector('#email') as HTMLInputElement;
import { CreateUser } from '../server/db/user';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user: CreateUser = { name: nameField.value, email: emailField.value };
    fetch('http://localhost:8080/user', {
        method: 'POST',
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => {
            nameField.value = '';
            emailField.value = '';
        })
        .catch((err) => console.error(err));
    // fetch('http://localhost:8080/test', { method: 'GET' })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err));
});
