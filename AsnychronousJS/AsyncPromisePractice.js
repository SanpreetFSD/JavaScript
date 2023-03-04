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