class InfoContext{
    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }
    show(){
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy{
    show( data, element){
        element.innerHTML = data.reduce( (acc, item) => {
            return acc   + `
            <div>
                <h2>${ item.name }</h2>
                <p>Ciudad: ${ item.country }</p>
            </div>
            <hr/>
            `
        }, "" );
    }
}
class DetailedListStrategy{
    show( data, element){
        element.innerHTML = data.reduce( (acc, item) => {
            return acc   + `
            <div>
                <h2>${ item.name }</h2>
                <p>Ciudad: ${ item.country }</p>
                <p> Info: ${ item.info }</p>
            </div>
            <hr/>
            `
        }, "" );
    }
}

class ListWithImagesStrategy{
    show(data, element){
        element.innerHTML = data.reduce( (acc, item) => {
            return acc + `
            <div>
                <img width="10%" src="${ item.img }" />
                <h2>${ item.name }</h2>
            </div>
            `;
        }, "" );
    }
}


const data = [
    {
        name: 'heineken',
        country:'Alemania',
        info: 'cerveza heineken',
        img: 'heinegen_img'
    },
    {
        name: 'Corona',
        country:'México',
        info: 'cerveza corona',
        img: 'corona_img'
    },
    {
        name: 'Delirium Tremens',
        country:'Bélgica',
        info: 'cerveza bélgica',
        img: 'delirium_img'
    },
];

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(), 
    new ListWithImagesStrategy()
];

const info = new InfoContext( new ListStrategy(), data, content );
info.show();

slcOption.addEventListener("change", () => {
    const op = event.target.value;
    console.log( op );
    info.setStrategy( strategies[op] );
    info.show();
});