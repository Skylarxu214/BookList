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
    }
}

//Store Class: Handle Storage

//Event: Display Books

//Event: Add a book

//Event: Remove a book
