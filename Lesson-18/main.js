// write
// delete
// loop
// value


// Object.getOwnPropertyDescriptor() ==> shows [ value, writable, enumerable, configurable]
// Object.defineProperty()  ===> do  [writable , configurable , enumerable , configurable]

//  let user = { name:"Webbrain" , title: "IT Center" , getData(){}}
// console.log(Object.getOwnPropertyDescriptor(user , 'name'));
// Object.defineProperty(user , 'getData' , {})
// delete user.getData
// user.name = "wba"   ===> writable
// console.log(user.name);
 
// console.log(user);


// GETTER VS SETTER                   

// const user = {
//      name: "Webbrain",
//      last: "Academy",
//     get fullName(){
//         console.log(this.name , this.last);
//      }
// }
// // user.fullName = "eshmat "
// user.fullName
