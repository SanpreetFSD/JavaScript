// Relationship between time and work

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;
let order = (time, work) =>{
    return new Promise ( (resolve, reject) =>{
        if(is_shop_open){

            setTimeout( ()=>{
                resolve( work ())}, )
            
        }

        else{
            reject(console.log("out shop is closed"))
        }
    } )
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// Promise chaining

.then(()=>{

    return order(0000, () => console.log("Production Started"));

})
.then( ()=>{
    return order(2000, () =>console.log("the fruit was chopped"))
})


.then( ()=>{
    return order(1000, ()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    })
})