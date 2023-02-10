

function sum(a,b){
    return a + b;
}

let res = sum(1, 2);
console.log( res );

const fSum = sum; // Primer Orden

console.log( fSum(52,24) );

// Orden Superior
function operation(fn, a, b){
    console.log( 'Se hace algo' );
    console.log( fn(a,b) );
}

operation( sum, 100, 200);

// --------------
console.clear();

// Arrow Function | FUnción Anónima
// const fAnonima = () => console.log( 'Hello' );
// fAnonima();
operation( (a, b) => a + b, 5, 5);