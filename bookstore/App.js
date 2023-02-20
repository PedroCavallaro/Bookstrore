const Database = require("./Database")
const User = require("./entities/User")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")

module.exports = class App {
   static #database = new Database()
   createUser(name, email, password){
      const user = new User(name, email, password)
      App.#database.saveUser(user)
   }
   
   getUser(){
      return App.#database.find('user')
   }
   createAuthor(name, nationality, bio){
      const author = new Author(name, nationality,bio)
      App.#database.saveAuthor(author)
   }
   getAuthors(){
     return App.#database.find("authors")
   }
   createBook(title, synopsis, genre, pages , author, desctiption, price, inStock){
      const book = new Book(title,synopsis,genre,pages,author, desctiption,price,inStock)
      App.#database.saveBook(book)
   }
   addBook(bookName, quantity){
      App.#database.addBooksToStock(bookName, quantity)
   }

   getBooks(){
      return App.#database.find("books")
   }
   createPoster(name, desctiption,height, width, price, inStock){
      const poster = new Poster(name, desctiption,height, width, price,inStock)
      App.#database.savePoster(poster)
   }
   addPoster(posterName, quantity){
      App.#database.addPosterToStock(posterName, quantity)
   }
   getPoster(){
      return App.#database.find("poster")
   }
   createOrder(items, user){
      const order = new Order(items, user)
      App.#database.saveOrder(order)
      order.data.items.forEach(({product, quantity})=>{
            if(product instanceof Book){
               App.#database.removeBookFromStock(product.name, quantity)

            }else if(product instanceof Poster){

               App.#database.removePosterFromStock(product.name, quantity)
            }
      })
   }
   getOrder(){
      return App.#database.find("orders")
   }
   showDatabase(){
      App.#database.showStorge()
   }
}