"use strict";
class SingletonTS {
    constructor() {
        this.random = Math.random();
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new SingletonTS();
        return this.instance;
    }
}
const singleton = SingletonTS.getInstance();
const singleton2 = SingletonTS.getInstance();
console.log(singleton);
console.log(singleton2);
