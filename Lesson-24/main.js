//// CURRY Function /////

// function getData(a) {
// return (b) => {
//     return (c) => {
//         return a + b + c
//     }
// }
// }
// console.log(getData(1)(2)(3));

// ===============> short way 
// function getData(a) {
//     return (b) => (c) => a + b + c
//     }
//      console.log(getData(1)(2)(5));

//  ==================> arraow function way of carry funtion

// const getData = (a) => (b) => (c) => a + b + c;
// console.log(getData(2)(4)(4));



// const options = (type) => {
//     return  (a) => (b) => (c) => {
//     switch(type) {
//         case "multiply":
//          return a * b * c;
//          break;
//          case "divide":
//          return a / b / c;
//          break;
//          case "add":
//          return a + b + c;
//          break;
//     }
//     }
// }

// const math = options('divide')
// console.log(math(2)(4)(3));

