// setTimeout   vs setInterval //
// ====> setTimeout
// setTimeout(callback , time , argument)


// console.log(1);

// setTimeout(() => {
//     console.log(6);
// },8000);

// for(let i = 0; i <=10; i++){
//     console.log(2);
// }

// setTimeout(() => {
//     console.log(5);
// },5000);

// let time = setTimeout(() => {
//     console.log(4);
// },0);

// console.log(3);

// clearTimeout(time)

//  ===>  setInterval

// let id = setInterval(() => {
//     let date = new Date()
//     console.log(`Today:  ${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()} `);
// }, 1000);

// clearInterval(id)



// let getName = () => {
//     return (name) => {
//         console.log(`My ${name}`);
//     }
// }
 
//  getName()("webbrain")


// let call = getName()
// call('webbrain')

