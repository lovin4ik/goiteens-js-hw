const bookShelf = {
	books: ['The Last Kingdom']
	// getBooks() {
	// 	return this.books
	// },
	// addBook(bookName) {
	// 	this.books.push(bookName)
	// },
	// removeBook(bookName) {
	// 	const bookIndex = this.books.indexOf(bookName)
	// 	this.books.splice(bookIndex, 1)
	// }
}

console.log('books_before:', bookShelf)
console.log('<--------------------------------------------->')

// bookShelf.getBooks = function () {
// 	return this.books
// }

// bookShelf.addBook = function (bookName) {
// 	this.books.push(bookName)
// }

// bookShelf.removeBook = function (bookName) {
// 	const bookIndex = this.books.indexOf(bookName)
// 	this.books.splice(bookIndex, 1)
// }

// console.log('books_after:', bookShelf)
// console.log('<--------------------------------------------->')

// console.log(bookShelf.getBooks())
// bookShelf.addBook('The Lord of the Rings')
// console.log('<--------------------------------------------->')
// console.log(bookShelf.getBooks())
// console.log('<--------------------------------------------->')
// console.log(bookShelf)

//todo: ✳️ var.2 Додавання до об'єкту методів "getBooks", "addBook" і "removeBook":

Object.assign(bookShelf, {
	getBooks() {
		return this.books
	},
	addBook(bookName) {
		this.books.push(bookName)
	},
	removeBook(bookName) {
		const bookIndex = this.books.indexOf(bookName)
		this.books.splice(bookIndex, 1)
	}
})
