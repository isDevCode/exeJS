function createBook(title, author, pages) {
    const book = {
        bookTittle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...');
        }
    }
    return book;
}

const book1 = createBook('Atomic', 'James', 306);
const book2 = createBook('LulaMolusco', 'Povo', 105);

book1.color = 'White';
console.log(book1);
console.log(book2);