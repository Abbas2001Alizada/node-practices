const fs=require("node:fs");
const readable=fs.createReadStream("./text.txt", { encoding: "utf8" });
const writable=fs.createWriteStream("./text1.txt");
readable.on("data",(chunk) => {
    // console.log(chunk.toString());
    writable.write(chunk)

}
);

// const fileSystem= require('node:fs/promises');
// const readable=fileSystem.createReadStream("./text.js")
// const writeable=fileSystem.createWriteStream("./text1.txt")

// readable.on("data",(chunk)=>{
//     writeable.write(chunk)
// })


// const { read } = require('node:fs');
// const fileSystem = require('node:fs/promises');
// async function readFile(){
//     try {const data=await fileSystem.readFile("./text.txt","utf-8")
//     console.log(data)
// }catch(err){console.log(err)}
// }
// readFile();

// const fileSystem = require("node:fs/promises")
// fileSystem.readFile("./text.txt", "utf-8")
//     .then((data) => { console.log(data) })
//     .catch((err) => { console.log(err) })

// const fileSystem = require("node:fs")
// const readed=fileSystem.readFileSync("./text.txt","utf-8")
// console.log(readed);

// fileSystem.writeFileSync("./text.txt","change the text using fs module")




// fileSystem.readFile("./text.txt","utf8",(err,data)=>{
//    if(err){
//     console.log(err)
//    } console.log(data)
// })
// fileSystem.writeFile("./text.txt","it is updated ","utf8",(err,data)=>{if(err){console.log(err)}
// console.log("text is updated ")})


// const buffer = new Buffer.from("new page","utf-8");
// console.log(buffer.toString());
// console.log(buffer.toJSON());
// console.log(buffer)

// const ordering=require("./order.js")
// const drink = require("./additional.js");
// const neworder=new ordering;
// const newdrink=new drink
// neworder.on("pizza",(siz,topping)=>{
//     console.log("order received "+siz +" pizza with"+ topping)
//     newdrink.addDrink(siz)
// })
// neworder.on("burger",(siz,price)=>{
//     console.log("order received "+siz +" burger price is: "+ price)
// newdrink.addDrink(siz)
// })
// neworder.orderPizza();
// neworder.orderBurger();
// neworder.countorder();

// // const EventEmitter= require("node:events")

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