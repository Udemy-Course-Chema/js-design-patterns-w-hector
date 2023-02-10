class LoginContext {
    constructor(strategy) {
        this.setStrategy(strategy);
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    login(user, password) {
        return this.strategy.login(user, password);
    }
}
class LoginDBStrategy {
    login(user, password) {
        console.log("Dirigimos a la base de datos");
        if (user === 'admin' && password === 'Hola12345UPQ@') {
            return true;
        }
        return false;
    }
}
class LoginServiceStrategy {
    login(user, password) {
        console.log("Estamos en el servicio");
        if (user === 'admin') {
            return true;
        }
        return false;
    }
}
const auth = new LoginContext(new LoginDBStrategy());
const resp = auth.login("admin", "Hola12345UPQ@");
auth.setStrategy(new LoginServiceStrategy());
const resp = auth.login("admin", "Hola12345UPQ@");
export {};
