const ordering=require("./order.js")
const drink = require("./additional.js");
const neworder=new ordering;
const newdrink=new drink
neworder.on("pizza",(siz,topping)=>{
    console.log("order received "+siz +" pizza with"+ topping)
    newdrink.addDrink(siz)
})
neworder.on("burger",(siz,price)=>{
    console.log("order received "+siz +" burger price is: "+ price)
newdrink.addDrink(siz)
})
neworder.orderPizza();
neworder.orderBurger();
neworder.countorder();

// const EventEmitter= require("node:events")

// const emitter=new EventEmitter();
// const order=document.querySelector(".order")
// const sbmtbtn=document.querySelector(".sbmtbtn")
// emitter.on("order",(tableNumber)=>{
//     console.log("go to salon on table number " + tableNumber)
// }) ;
//  sbmtbtn.addEventListener("click",()=>{
// if (order.value==true) {
// emitter.emit("order",3)}


// console.log(order.value)
// });