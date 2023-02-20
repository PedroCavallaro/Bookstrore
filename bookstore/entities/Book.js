const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(title, pages, synopsis, genre, author, description, price, inStock = 0){
        super(`livro ${title}`, description, price, inStock = 0)
        this.title = title
        this.pages = pages
        this.synopsis = synopsis
        this.genre = genre
        this.author = author
    }
}