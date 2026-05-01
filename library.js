function Book(author,title,pages,read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
Book.prototype.readStatus = function(status) {
  this.read = status;
}
const myLibrary = [];

const book = new Book("JK Rolling", "Harry Potter","1000","Currently Reading");
const player = new Book("Odin","WebDev","200","reading");
function addBookToLibrary(book) {
    let complBook = `The ${book.title} by ${book.author} ${book.pages} pages ${book.read}.`;
    myLibrary.push(complBook);
}
addBookToLibrary(book);
addBookToLibrary(player);
const body = document.querySelector("body");
function loopOverLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    const lib = document.createElement("p");
    lib.textContent = `${myLibrary[i]}`;
    lib.style.width = "420px";
    lib.style.border = "1px solid green";
    lib.style.padding = "10px";
    const button = document.createElement("button");
    button.textContent = "Read Status";
    button.style.display = "inline";
    lib.append(button);
    button.style.width = "96px";
    button.style.fontSize = ".9rem";
    button.style.color = "white";
    button.style.backgroundColor = "dodgerblue";
    button.style.border = "none";
    button.style.height = "25px";
    button.style.cursor = "pointer";
    const newBook = document.querySelector("input[type='text']");
    body.append(lib);
  }
}
const button = document.querySelector("button");
button.addEventListener("click", function() {
  event.preventDefault()
})
loopOverLibrary();
