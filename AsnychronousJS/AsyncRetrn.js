//async 

// function anyFunction(){
//     return Promise.resolve(5);
// }
// // console.log(anyFunction().then());

// anyFunction().then( ()=> console.log("Promise.resolve"))

async function f1() {
    //   return 5;
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("I am resolved");
      }, 2000);
    });
  
    const anyVar = await prom;
    console.log(anyVar);
  }
  f1();
  //console.log(f1().then((res) => console.log(res)));