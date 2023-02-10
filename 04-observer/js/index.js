class Subject{
    constructor(){
        this.observers = [];
    }

    subscribe(observers){
        this.observers.push( observers );
    }

    unsubscribe(observers){
        this.observers = this.observers.filter( obs => obs !== observers );
    }

    notify( data ){
        this.observers.forEach( e => {
            e.refresh( data );
        } )
    }
}

class Observer{
    constructor( fn ){
        this.fn = fn;
    }

    refresh( data ){
        this.fn( data );
    }
}

const subject = new Subject();
const obs1 = new Observer( d => console.log( "Soy la consola en el observer, data: " + d ) );
const obs2 = new Observer( d => {
    div1.innerHTML = d;
});

let o3 = new Observer( d => {
    div2.innerHTML = d.split("").reverse().join("");
})


subject.subscribe( obs1 );
subject.subscribe( obs2 );
subject.subscribe( o3 );

function change(){
    subject.notify(myText.value);
}