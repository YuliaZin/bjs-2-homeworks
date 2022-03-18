class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        parseFloat((this.state *= 1.5).toFixed(2)); //округлить
        return this.state;
    }

    get state() {
        return this._state;
    }
        
    set state(value) { 
        if (value > 100) {
            this._state = 100;
        } else if (value <= 0) {
            this._state = 0;
        } else this._state = value;
    }
}

    class Magazine extends PrintEditionItem { 
        constructor(...args) {
            super(...args);
            this.type = 'magazine';
        }
    }

    class Book extends PrintEditionItem { 
        constructor(author, ...args) {
            super(...args);
            this.author = author;
            this.type = 'book';
        }
    }

    class NovelBook extends Book { 
        constructor(...args) {
            super(...args);
            this.type = 'novel';
        }
    }

    class FantasticBook extends Book { 
        constructor(...args) {
            super(...args);
            this.type = 'fantastic';
        }
    }

    class DetectiveBook extends Book { 
        constructor(...args) {
            super(...args);
            this.type = 'detective';
        }
    }


//Задача 2

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book); 
        }
    }

    findBookBy(type, value){
       let bookFind = this.books.find(item => item[type] === value)

        if (bookFind == undefined) {
           return null;
        } else {
        return bookFind;
        }
    }

    giveBookByName(bookName) {

        let index = this.books.findIndex(item => item.name === bookName);

        if (index != -1) {
            let book = this.books.splice(index, 1);
       
        return book[0];
        } else {
            return null;
        }
    }

}
