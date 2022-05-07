//Todo
// Store all the data to the storage


// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function Display() {

}

//Add mothods to Display prototype
Display.prototype.add = function(book) {
    const tableBody = document.querySelector('#tableBody')
    const uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>

                    </tr>`
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function() {
    const libraryForm = document.querySelector('#libraryForm')
    libraryForm.reset();
}

Display.prototype.validate = function(book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    } else {
        return true
    }
}
Display.prototype.show = function(type, displayMessage) {
    const message = document.querySelector('#message')
    message.innerHTML = `<div class="alert alert-${type}warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong>${displayMessage}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`
    setTimeout(() => {
        message.innerHTML = ''
    }, 2000)
}

//Add submit event to libraryForm
const libraryForm = document.querySelector('#libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {

    let name = document.querySelector('#bookName').value;
    let author = document.querySelector('#author').value;
    let fiction = document.querySelector('#fiction');
    let programming = document.querySelector('#programming');
    let cooking = document.querySelector('#cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    const book = new Book(name, author, type)
    e.preventDefault()
    const display = new Display(name)
    if (display.validate(book)) {
        display.add(book)
        display.show('success', 'Your book has been successfully added');
    } else {
        // show alert
        display.show('danger', 'Sorry you cannot add this book');
    }
    display.clear();

}