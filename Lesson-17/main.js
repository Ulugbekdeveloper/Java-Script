// DDOS Attact vs Caches 


// ====> DDOS Attact 
// getData = () => {
//     setInterval(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json)
//     },0);
    
// }

// let user = {
//     name: "users",
//     getData(){
//         fetch(`https://jsonplaceholder.typicode.com/${this.name}`)
//         .then(res => res.json)
//     } 
// }

//  user.getData;

// function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json)
// }

// function getCached(func) {
// let cache = new Map()
// return function(x){
// if(cache.has(x)){
//     console.log(cache.get(x));
//     return cache.get(x)
// }
// let res = func.call(this)
// return cache.set(x , res)
// }
// } 

// user.getData = getCached(user.getData)


