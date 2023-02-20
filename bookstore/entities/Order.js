const Product = require("./Product")

module.exports = class Order{
    #total
    #items
    #user
    constructor(items, user){
      items.forEach(({product, quantity}) => {
        if(product > quantity){
            throw new Error("Quantidade insuficiente no estoque") 
        }
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum , {product, quantity})=> sum + (product * quantity), 0)
      });
    }
    get data(){
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}