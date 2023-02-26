// const newPromise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("resolved")
//     },2000)
//   //   resolve("resolved");
//   });
//   const newPromise = Promise.resolve(100);
//   Promise.any([newPromise2, newPromise]).then((result) => {
//     console.log(result);
//   });

const newPromise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("resolved")
    },2000)
  //   resolve("resolved");
  });
  const newPromise = Promise.resolve(100);
  const newPromise3 = Promise.reject("rejected");
  Promise.allSettled([newPromise, newPromise2, newPromise3])
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  