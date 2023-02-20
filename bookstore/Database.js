module.exports = class Database{
    #storage = {
       authors: [],
       books:[],
       poster:[],
       orders:[],
       user:[]
    }
    find(key){
       return this.#storage[key]
    }
    saveAuthor(author){
       this.#storage.authors.push(author)
    }
    findBookByName(bookName){
       return this.#storage.books.find(b => b.name === bookName.name)
    }
    saveBook(book){
       const bookExists = this.#storage.books.find(b => b.name === book.name);
       if(!bookExists){
           this.#storage.books.push(book)
       }
    }
    addBooksToStock(bookName, quantity){
       const book = this.findBookByName(bookName)
       book?.addOnStock(quantity)
    }
    removeBookFromStock(bookName, quantity){
       const book = this.findBookByName(bookName)
       book?.removeFromStock(quantity)
    }

    findPosterName(posterName){
       return this.#storage.poster.find(p => p.name === posterName.name)
    }
    savePoster(poster){
       const posterExists = this.#storage.poster.find(p => p.name === poster.name);
       if(!posterExists){
           this.#storage.poster.push(poster)
       }
    }
    addPosterToStock(posterName, quantity){
       const poster = this.findPosterName(posterName)
       poster?.addOnStock(quantity)
    }
    removePosterFromStock(posterName, quantity){
       const poster = this.findPosterName(posterName)
       poster?.removeFromStock(quantity)
    }

    saveUser(user){
        const userExists = this.#storage.user.find(u => u.email === user.email)
        if(!userExists){
           this.#storage.user.push(user)
        }
     }
     saveOrder(order){
        this.#storage.orders.push(order)
     }
     showStorge(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.poster)
        console.table(this.#storage.user)
        console.table(this.#storage.orders.map(order => order.data))
     }
}