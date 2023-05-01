     ///// ADVANCED  LESSSONS //////
////Proxy///     

// let user = {
//     name: "Temurbek",
//     _stir: 123456,
//     pass:200311
// }
// let proxy = new Proxy(user, {
    // get(target , prop){
    //     if(prop.startsWith('_')) return `Access for ${prop} is denied`
    //     return target[prop]
    // }, 
//     set(target , prop , value) {
//     if(prop === 'pass'){
//         return false 
//     }
//     target[prop] = value
//     return true  
//     }  
 
// });

// proxy.pass = "IT Center"

// console.log(user);
// console.log(proxy.title)