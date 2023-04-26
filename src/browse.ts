const booksTable = document.querySelector('#books-table') as HTMLTableElement;
const bookTemplate = document.querySelector(
    '#book-template'
) as HTMLTemplateElement;

const authors: any = [];

async function stuff() {
    const raw = await fetch('http://localhost:8080/books');
    const books = await raw.json();

    for (let book of books) {
        if (authors.filter((a: any) => a.id === book.authorId).length < 1) {
            const raw2 = await fetch(
                `http://localhost:8080/authors/${book.authorId}`
            );
            const author = await raw2.json();
            authors.push(author);
        }

        const clone: any = bookTemplate.content.cloneNode(true);

        const title = clone.querySelector('.title');
        title.textContent = book.title;

        const ISBN = clone.querySelector('.isbn');
        ISBN.textContent = book.ISBN;

        const author = clone.querySelector('.author');
        author.textContent = authors.filter(
            (a: any) => a.id === book.authorId
        )[0].name;

        (booksTable as any).querySelector('tbody').appendChild(clone);
    }

    books.forEach(async (book: any) => {});
}

// fetch('http://localhost:8080/books', { method: 'GET' })
//     .then((res) => res.json())
//     .then((books) => {
//         books.forEach((book: any) => {
//             if (authors.filter((a: any) => a.id === book.authorId).length < 1) {
//                 fetch(`http://localhost:8080/authors/${book.authorId}`, {
//                     method: 'GET',
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         authors.push(data);
//                     });
//             }
//             const clone: any = bookTemplate.content.cloneNode(true);

//             const title = clone.querySelector('.title');
//             title.textContent = book.title;

//             const ISBN = clone.querySelector('.isbn');
//             ISBN.textContent = book.ISBN;

//             // const author = clone.querySelector('.author');
//             // author.textContent = authors.filter(
//             //     (a: any) => a.id === book.authorId
//             // )[0].name;

//             (booksTable as any).querySelector('tbody').appendChild(clone);
//         });
//     });

stuff();
