
// Método Reduce
/**
 * El reduce es una función del primer orden. 
 * 
 * El primer parámetro es una función, 
 * y el segundo parámetro es un valor. 
 */
const names = ["Bruce","Clark","Lex Luthor"];
const numbers = [1,342,23,12,53];


const total = numbers.reduce( (accumulado, number) => accumulado + number  );

console.log( total );
