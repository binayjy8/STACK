// function hello () {
//     console.log("Gd Morning");
// }

// function namaste () {
//     hello();
// }

// namaste();

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// setTimeout( () => {
//     console.log("This is My village");
// }, 2000);

// console.log("hello......");

//  h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     });
// }

// changeColor("red", 1000)
// .then(()=>{
//     console.log("red color success");
//     return changeColor("yellow", 1000);
// })
// .then(()=>{
//     console.log("yellow color success");
//     return changeColor("gray", 1000);
// })
// .then(()=>{
//     console.log("gray success");
//     return changeColor("green", 1000);
// })
// .then(()=>{
//     console.log("green success");
//     return changeColor("green", 1000);
// });

// changeColor("greenYellow", 1000, ()=> {
//     changeColor("gray", 1000, ()=> {
//         changeColor("yellow", 1000);
//     });
// });



// savetoDb("apna college", ()=>{
//     console.log("success data saved");
//     savetoDb("hello world", ()=> {
//         console.log("success2 data saved");
//         savetoDb("binay", ()=> {
//             console.log("success3 data saved");
//             savetoDb("khuntapingu", ()=> {
//                 console.log("success4");
//             }, ()=> {
//                 console.log("bad connection");
//             })
//         }, ()=> {
//             console.log("weak3 connection failed");
//         })
//     }, ()=> {
//         console.log("weak2 data not saved");
//     })
// }, ()=> {
//     console.log("weak connection data not saved")
// });

// function savetoDb (data) {
//     return new Promise( (resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("success: data was saved");
//         } else {
//             reject("weak connection speed slow");
//         }
//     });
// }

// savetoDb("My Village")
//     .then( (result)=>{
//         console.log("data1 saved");
//         console.log(result);
//         return savetoDb("Play Cricket");
//     })
//     .then( (result)=>{
//         console.log("data2 saved");
//         console.log(result);
//         return savetoDb("Give your best");
//     })
//     .then( (result)=>{
//         console.log("data3 saved");
//         console.log(result);
//     })
//     .catch( (error)=>{
//         console.log("promised rejected");
//         console.log(error);
//     });

async function call() {
    throw "random error";
    return "hello";
}