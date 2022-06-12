//Book Class: Represents a book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}
//UI Class: Handle UI Tasks
class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Eat That Frog',
                author: 'Brian Tracy',
                isbn:'1576751988'

            },
            {
                title:'Book Two',
                author: 'Tian X',
                isbn: '1914'
            }
        ]
        const books = StoredBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class= "btn btn-danger btn-sm delete">X</a></td>
            `;
            list.appendChild(row);
    }
    static deleteBook(el){
        if (el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}

//Store Class: Handle Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)
//Event: Add a book
document.querySelector("#book-form").addEventListener('submit',(e)=>
{
    // Prevent actual submit
    e.preventDefault();
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
// instatiate book
const book = new Book(title,author, isbn);
console.log(book)

})
//Event: Remove a book
//test OOP

