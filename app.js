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

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout( ()=> {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

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

function savetoDb (data) {
    return new Promise( (resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success: data saved");
        } else {
            reject("weak connection");
        }
    });
}

savetoDb("My Village")
    .then( ()=>{
        console.log("data1 saved");
        return savetoDb("Play Cricket");
    })
    .then( ()=>{
        console.log("data2 saved");
        return savetoDb("Give your best");
    })
    .then( ()=>{
        console.log("data3 saved");
    })
    .catch( ()=>{
        console.log("weak connection");
    });