const Product = require("./Product");

module.exports = class Poster extends Product{
    constructor(height, width, name, description, price, inStock = 0){
        super(name, description, price, inStock)
        this.height = height
        this.width = width
    }
}