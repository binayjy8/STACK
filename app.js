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

h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout( ()=> {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("greenYellow", 1000, ()=> {
    changeColor("gray", 1000);
});