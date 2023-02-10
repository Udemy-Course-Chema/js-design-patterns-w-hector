
class SaleContext{
    constructor(strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    calculate(amount){
        return this.strategy.calculate(amount);
    }
}

class RegularSaleStrategy{
    constructor(tax){
        this.tax = tax;
    }

    calculate(amount){
        return amount + ( amount * this.tax );
    }
}

class DisccountSaleStrategy{
    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount){
        return amount + ( amount * this.tax ) - this.discount;
    }
}

class ForeignSaleStrategy{

    calculate(amount){
        return amount * this.getDollarPrice();
    }

    getDollarPrice(){
        return 20;
    }
}

const regularSale = new RegularSaleStrategy(30.50);
const discount = new DisccountSaleStrategy( 0.16, 30);
const foreignSale = new ForeignSaleStrategy();

const sale = new SaleContext( regularSale );
sale.setStrategy( discount );


console.log( sale.calculate(200) );

sale.setStrategy( foreignSale );
console.log( sale.calculate( 2 ) )