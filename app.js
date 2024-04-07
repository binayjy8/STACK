// function hello () {
//     console.log("Gd Morning");
// }

// function namaste () {
//     hello();
// }

// namaste();

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();