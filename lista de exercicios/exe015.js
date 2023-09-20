function createBook(title, author, pages) {
   let book = {
    bookTitle: title,
    bookAuthor: author,
    bookPages: pages,
}
return book;
}

const book1 = createBook ('Bruxa de Blair', 'Andrade', 385 );
console.log(book1);