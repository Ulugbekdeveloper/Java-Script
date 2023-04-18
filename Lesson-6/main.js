// let obj = {
//     name: "Ulug'bek",
//     age:27,
//     child:{
//      name:"eshmat",
//      age:10,
//      child:{
//         title:"ulu",
//         name:"toshmat",
//         age:3
//      },
//     },
// };

// let res = {}
// while(obj){
//   for(let key in obj){
//     if(key === 'title')res[key] = obj[key]
//   }
//     obj = obj.child
// }
// console.log(res);

// let test = structuredClone(obj);
// console.log(test);


// let sum = 0 ;
// while(obj){
// sum += obj.age
// obj = obj.child
// }
// console.log(sum);

// function sayHi(){
// console.log("hi");
// }
// name =  " Ulug'bek"
// let user = {
//     name : " Ulug'bek",
//     sayHi(){
//         // console.log(`hi, ${this.name}`);
//     }   ,
//     getName: function(){
//        return()=> {
//             console.log(`Hi ${this.name}`);
//            } 
//     } 
// }
// user.getName()()

// let test = user
// user = null
// console.log(test);
// console.log(user);
//   user.sayHi()
//   test.sayHi()

// function getName(){
//     console.log(new.target);
// }
// new getName()


// let id1 = Symbol('id');
// let id2 = Symbol('id');

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// let obj = {
//     id: 1,
//     'id': 2,
//     ["id"]: 3,
//     [id1]:4,
//     [id2]: 5
// }
// console.log(obj[id1]);
// console.log(obj[id2]);

     // DISTRUCTURE ////

// let name = "bro"
// let obj =  {
//     name :"Ulug'bek",
//     surName : "G'uzorov",
//     age : 20,
//     child:{
//         childName:"test2",
//         children: {
//         id:1,
//         thebest:{
//             mom:2
//         }
//         }
        
//     }
// }
// //look at this 
// const {surName } = obj
// console.log(surName);   ///"G'uzorov"
// const {name:firstName, surName, age, child:{children:{thebest:{mom}}}} = obj
// console.log(mom)

 /// SPREAD OPERATOR ///

// let obj =  {
//     name :"Ulug'bek",
//     surName : "G'uzorov",
//     age : 20,
  
// }

// console.log({...obj, name:"CE"});
// console.log({ name:"CE", ...obj});

// obj = {...obj.child.children.thebest}    //{ mom: 2 }
// console.log(obj);



