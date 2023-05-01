// let user = {name:"Temurbek", age:27 , _pass:223344};

// let proxy = new Proxy(user, {
// ownKeys(result){
//    return Object.keys(result).filter((val)=> !val.startsWith('_'))
// }
// })

// console.log(proxy);

// for(vl in proxy ){
//     console.log(vl);
// }


// let user = {name:"Temurbek", age:27 , _pass:223344};
// let range = {
//     from : 1 ,
//     to : 10,
// };

// let proxy = new Proxy(range, {
// has(target , prop){
//    return target.from <= prop && target.to >= prop
// }
// })
// range.to = 100
// console.log(10 in proxy);


//Reflect//  =====> works for only get and set 

// let user = {name:"Temurbek", age:27 , _pass:223344};
// Reflect.set(user , "status" , "CEO")
// console.log(user);

// EX 

// let user = {
//     name:"Temurbek", 
//     _pass:223344,
//     get(){
//         console.log(this.name , this._pass);
//     }
// };

// let data = user.get
// data.call(user)


