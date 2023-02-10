/**
 * Hay dos formas de crear la clase
 */

// La primera es utilizar la palabra reservada "class".
class Drink{

    constructor(name){
        this.name = name;
    }

    info(){
        return `La bebida es: ${ this.name }`;
    }
}

// Herencia
class Beer extends Drink{
    constructor(name, brand){
        super(name);
        this.brand = brand;
    }

    info(){
        return super.info() + `con la marca: ${ this.brand }`;
        // return `Beberá ${this.name} y de la marca ${ this.brand } `;
    }
}


const bebidaClass = new Drink("Coca-Cola");
const nombreBebida = bebidaClass.info();
console.log( nombreBebida );

const beerExample = new Beer("beber", "Corona");
console.log( beerExample.info() );



// la segunda es funcional.
// function Drink2(name){
//     this.name;
//     this.info = function(){
//         return `La bebida es: ${ name }`;
//     };
// }

// Funcional
// const bebidaFuncional = new Drink2("Sprite");
// console.log( bebidaFuncional.info() );