import { Strategy } from './interfaces/index';



class LoginContext {
    private strategy: Strategy;

    constructor( strategy:Strategy ){
        this.setStrategy( strategy );
        // this.strategy = strategy;
    }

    setStrategy( strategy: Strategy ){
        this.strategy = strategy;
    }

    login(user:string, password: string): boolean{
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy{
    login(user: string, password: string): boolean {
        console.log( "Dirigimos a la base de datos" );
        if( user === 'admin' && password === 'Hola12345UPQ@' ){
            return true;
        }
        return false;
    }
}

class LoginServiceStrategy implements Strategy{
    login(user: string, password: string): boolean {
        console.log( "Estamos en el servicio" );
        if(user === 'admin'){
            return true
        }

        return false;
    }
}

const auth = new LoginContext( new LoginDBStrategy() );
const resp = auth.login("admin", "Hola12345UPQ@");
auth.setStrategy( new LoginServiceStrategy() );
const resp = auth.login("admin","Hola12345UPQ@");
