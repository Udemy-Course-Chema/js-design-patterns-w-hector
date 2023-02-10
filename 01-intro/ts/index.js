"use strict";
class Drink {
    constructor(name) {
        this.name = name;
    }
    info() {
        return `Acción: ${this.name}`;
    }
}
class Beer extends Drink {
    constructor(name, brand, price) {
        super(name);
        this.brand = brand;
        this.price = price;
    }
    info() {
        return super.info() + ` y con la marca del alcohol: ${this.brand}`;
    }
    getPrice() {
        return `El precio es de : ${this.price}`;
    }
}
const drink = new Drink("Cola");
const beer = new Beer("mi bebida", "Coca cola", 25.50);
console.log(drink.info());
console.log(beer.info());
console.log(beer.getPrice());
