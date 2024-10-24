const myLibrary = [];



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return this.title + " witten by " + this.author + ", it is " + this.pages + " pages, i have " + this.read + " this book";
    };
}



function addBookToLibrary(title, author, pages, read) {

    myLibrary.push({title, author, pages, read});

    let index = myLibrary.length - 1;

    return index;
}



function displayBooksOnPage() {
    let bookDisplay = document.querySelector(".books");
    

    myLibrary.forEach((book) => {
        console.log(myLibrary);
        let singleBook = document.createElement("div");
        singleBook.innerText = book.title + " witten by " + book.author + ", it is " + book.pages + " pages, i have " + book.read + " this book";
        bookDisplay.appendChild(singleBook);
    })
}
  



  
function displaySingleBook(title, author, pages, read, index) {
    let bookDisplay = document.querySelector(".books");

    let singleBook = document.createElement("div");
        singleBook.innerText = title + " witten by " + author + ", it is " + pages + " pages, i have " + read + " this book";
        bookDisplay.appendChild(singleBook);


    let deleteBook = document.createElement("button");
        deleteBook.innerText = "Remove";
        deleteBook.onclick = function () {
            

                //delete displayed book
               
               let allBooks = document.querySelectorAll(".books > *") 
               console.log(allBooks);
               allBooks.forEach((x) => {
                if (x.dataset.index > singleBook.dataset.index){
                    x.dataset.index --;
                }
                
               })
               deleteBook.parentElement.remove(); 


               //delete book from array
               myLibrary.splice(deleteBook.parentElement.dataset.index,1)
               
        }
        deleteBook.classList.add('remove-button');
        singleBook.appendChild(deleteBook);


        let changeReadStatus = document.createElement("button");
        changeReadStatus.innerText = read;
        changeReadStatus.onclick = function () {
            if (myLibrary[index].read === "Read" ) {
                myLibrary[index].read = "Not read";

            } else {
                myLibrary[index].read = "Read";
            }

            changeReadStatus.innerText = myLibrary[index].read;



        }
        singleBook.appendChild(changeReadStatus);

        singleBook.dataset.index = index;

}


const showButton = document.getElementById("showdialog");
const bookDialog = document.getElementById("bookdialog");

const cancel = document.querySelector("#cancel");


const selectEl = bookDialog.querySelector("select");
const confirmBtn = bookDialog.querySelector("#confirmBtn");


// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
    bookDialog.showModal();
  });

  // "Cancel" button closes the dialog without submitting , triggering a close event.
cancel.addEventListener("click", (e) => {
    bookDialog.close();
});




confirmBtn.addEventListener("click", () => {
    let title = document.forms["bookform"]["bname"].value;
    let author = document.forms["bookform"]["bauthor"].value;
    let pages = document.forms["bookform"]["bpages"].value;
    let read = document.forms["bookform"]["read"].value;

    //addBookToLibrary(title, author, pages, read);
    displaySingleBook(title, author, pages, read, addBookToLibrary(title, author, pages, read));
    bookDialog.close();

})