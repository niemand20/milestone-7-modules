console.log("first");
console.log("second");
// setTimeout(()=>{
//     console.log("third")
// })
let seconds =  0;
// setInterval(()=>{
//     // console.log("third")
//     console.log(seconds++);
// },500)

// const intervalId = setInterval(()=>{
//     seconds++;

//     console.log(seconds);
//     if(seconds===10){
//         clearInterval(intervalId);
//     }
// },500)
const intervalId = setInterval(()=>{
    

    console.log(++seconds);
    if(seconds===10){
        clearInterval(intervalId);
    }
},300)

console.log("fourth");
console.log("fifth");