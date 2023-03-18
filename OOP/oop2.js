// const learner = {
//     active: true,
//     details : function (){
//         console.log(`hello ${this.name}`);
//     }

// };

// const obj1 = Object.create(learner);
// console.log(obj1.active);

// obj1.active = false;
// console.log(obj1.active);


const learner = {
    active: true,
    details : function (){
        console.log(`Hello ${this.name}`)

    }
}

const obj1 = Object.create(learner)
console.log(obj1.active)

obj1.active = false;
console.log(obj1.active)
obj1.name = "Sanpreet"
obj1.details()