// Recursion //

// const sum = (n) => {
//     console.log(n);
//     if(n === 2) return 2
//     else return  sum(n - 2 )
    
// }
// sum(8)


// let company = {
//     sales : [
//       {name: 'John' , salery : 10000},
//       {name: 'Tom  ' , salery : 30000}
//     ],
//     development : {
//         sites: [
//          {name: 'Sara' , salery : 40000},
//          {name: 'Nancy' , salery : 20000}  
//         ],
//         internals :[
//                 {name: 'olve' , salery : 8000}
//         ],
//     },
// };


// console.log(Object.values(company));
// const calculate = (company) => {
// if(Array.isArray(company)){
//     return company.reduce((prev , current) => prev + current.salery , 0)
// }else {
//     let sum = 0;
//      for(let res of Object.values(company)){
//         sum += calculate(res)
//         console.log('this is ' ,res ,  'res');
//      }
// }
// }

// calculate(company)


