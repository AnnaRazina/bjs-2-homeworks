//dz1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        this.state = this._state * 1.5;
        return this.state;
    }
    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
            this.fix;
        }
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}
class  DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}
//dz2
class Library {
    constructor (name = "", books = []) {
        this.name = name;
        this.books = books;
    }
    addBook(book) {
        this.book = book; 
        if (this.book._state) {
        this.books.push(book); 
        }  
    }
    findBookBy(type, value) {
        let result;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                result = this.books[i];
            } else {
                result = null;
            }
        }
        return result;
    }
    giveBookByName(bookName) {
        let findBook;
        for(let i = 0; i < this.books.length; i++) {
           /* if (this.books[i].name !== bookName) {
                findBook = null;
                console.log(findBook);
            } else*/
            if (this.books[i].name === bookName) {
                findBook = this.books.splice(i, 1);
                console.log(findBook);
            }    
        };

        if (findBook === undefined) {
            return null;
        };
       
        return findBook;
    }
}    
