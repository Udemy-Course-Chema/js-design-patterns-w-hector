
/**
 * Clases
 */

interface Product{
    price:number;
    getPrice():string;

}


class Drink{
    private name:string;
    constructor( name:string ){
        this.name = name;
    }

    info():string{
        return `Acción: ${ this.name }`;
    }
}

// BEER
class Beer extends Drink implements Product{
    private brand:string;
    public price: number;
    constructor( name:string, brand:string, price:number){
        super(name);
        this.brand = brand;
        this.price = price;
    }

    info():string{
        return super.info() + ` y con la marca del alcohol: ${ this.brand }`
    }

    getPrice():string{
        return `El precio es de : ${ this.price }`;
    }
}


const drink = new Drink("Cola");
const beer = new Beer("mi bebida", "Coca cola", 25.50);
console.log( drink.info() );
console.log( beer.info() );
console.log( beer.getPrice() );