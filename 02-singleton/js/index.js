class Singleton{

    static getInstance(){
        return Singleton.instance;
    }

    constructor(name){
        console.log( "Entrando al constructor" );
        if(Singleton.instance){
            console.log( "Ya existe en la otra instancia" );
            return Singleton.instance;
        }

        console.log( "No existe" );
        Singleton.instance = this;
        this.name = name;
    }
}

const miObject = new Singleton("Caos");
const miObj2 = new Singleton("Creation");
const singleton3 = Singleton.getInstance();

console.log( miObject );
console.log( miObj2 );
console.log( singleton3 );