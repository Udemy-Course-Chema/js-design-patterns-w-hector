
const names = ["Bruce","Clark","Lex Luthor"];
names.forEach( name => console.log( name ) );
names.forEach( name => console.log( name?.toUpperCase() ) );

/**
 * La diferencia entre el ForEach y el Map. 
 * El forEach es inmutable, quiere decir que no se puede modificar 
 * los valores/items del arrays. 
 * Mientras que el map si puedes modificar y se crea un nuevo array. 
 */

console.log(" ============== DATA: MAP ==============   " );
console.log(names.map( name => ("El nombre es: " + name) ));

// No se guarda nada a la variable namesFromForEach
// const namesFromForEach = names.forEach( name => name.toUpperCase() );
// console.log( namesFromForEach ); // No regresa nada. 

const namesUpper = names.map( name => name.toUpperCase() );
console.log( namesUpper );