"use Strict";
console.log("Implementing a library Class");

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library{
    constructor(...args){
        this.bookArray = [...args]
        this.issuedBooks = []
    }

    getBookList(){
        let x = "";
        this.bookArray.forEach(element => {
            x += element+", ";
        });
        console.log(x)
    }

    issueBook(bookName,readerName){
        let index = this.bookArray.findIndex(checkBookName);
        function checkBookName(bookName){
            return bookName
        }
        console.log(index)
        if(index >-1){
        this.issuedBooks.push([this.bookArray[index],readerName])
        this.bookArray[index].push(readerName)
        }else {return false}

    }
    
    issuedBooks(){
        let x = "";
        this.issuedBooks.forEach(element=>{
            x += `${element[0]} issued to ${element[1]} ,
            `
        })
        console.log(x)
    }

    returnBook(bookName,readerName){
        let index = this.issuedBooks.findIndex([bookName,readerName])
        this.issuedBooks.splice(index,1);
        this.bookArray.push(bookName);
    }

}

let SophiaLibrary = new Library("The Jungle Book","Tom and Jerry","How Women Lie","sherLock Holmes and the Hounds Of Baskerville")
console.log(SophiaLibrary.getBookList());