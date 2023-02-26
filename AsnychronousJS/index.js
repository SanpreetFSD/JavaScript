// let name = "San";
// let detail = `name of the person is ${name}`;
// console.log(detail);
console.log("Hello");
setTimeout(() => {console.log("executing Set-timeout")},2000);
console.log("End");

const add = (a, b) => {
    let sum = a + b;
    console.log(sum);
    return sum;
  };
  
  const sub = (a, b) => {
    let sub = a - b;
    setTimeout(() => {
      console.log(sub);
    }, 2000);
    return sub;
  };
  
  const mul = (a, b) => {
    let mul = a * b;
    console.log(mul);
    return mul;
  };
  
  const Addition = (a, b, callBackFunction) => {
    callBackFunction(a, b);
  };
  
  const Substraction = (a, b, callBackFunction) => {
    callBackFunction(a, b);
  };
  
  const Multiplication = (a, b, callBackFunction) => {
    callBackFunction(a, b);
  };
  
  Addition(1, 3, add);
  Substraction(11, 3, sub);
  Multiplication(14, 32, mul);

// const seriesOfOp = (a, b) => {
//     Addition (a,b (a,b) =>{
//         console.log(a + b);
//     })
// } // this fucntion is callback hell and we need to avoid that.

(a) => (a + 200);
    


// Promises in JS

// let paddition = (arr) => {
//     return new Promise((resolve, reject) => {
//       let a = arr[0];
//       let b = arr[1];
//       if (a < 2 || b < 3) {
//         reject("Pass only non negative numbers");
//       } else {
//         let sum = a + b;
//         console.log("Sum is ", sum);
//         resolve(arr);
//       }
//     });
//   };
  
//   paddition([1, 10])
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

  let psubtraction = (arr) => {
    return new Promise((resolve, reject) => {
      let a = arr[0];
      let b = arr[1];
      if (a < 0 || b < 0) {
        reject("Pass only non negative numbers");
      } else {
        let sub = a - b;
        console.log("Sub is ", sub);
        resolve(arr);
      }
    });
  };
  
  psubtraction([1, 10])
  .then(result => console.log(result))
  .catch(error => console.log(error))