const EventEmitter = require('node:events');


class ordering extends EventEmitter {
    constructor() {
        super();
        this.number = 0;
    }
    orderPizza(siz, topping) {
        this.number++;
    this.emit("pizza", "small", "sweet");
    }
    orderBurger(siz,price){
        this.number++;
        this.emit("burger", "medium", 10);
    }
    countorder() {
        console.log("you have "+this.number+" orders")

    }
}
module.exports = ordering;
