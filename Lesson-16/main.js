// // call vs apply vs bind 

// let user = {
//  name: "Ulug'bek",
//  lastName: "Qodirov",
//  title: "IT Center",
//  getFull(){
//     console.log(`${this.name} , ${this.lastName}`);
//   }
// };
// user.getFulName()



// let user2 = {
//     name: "Digital",
//     lastName: "One",
//     title: "Frontend",
//     getFulName(){
//        console.log(`${this.name} , ${this.lastName}`);
//      }
//    };
//    user2.getFulName()


// let users = [
// {
//     name: "Digital",
//     lastName: "One",
//     title: "Frontend",
// },
// {
//    name: "Webbrain",
//    lastName: "Academy",
//    title: "It Center",
// }
// ]
   
// function getFullName(){
//     // console.log(`${this.name} \ ${this.lastName}`);
//     console.log(this);
// }
// getFullName.call(user)


// let UI = {
//   name:"Ulug'bek",
//   age: 20,
//   status: "Dev"
// }

// function getName(a,b) {
//   console.log(a,b);
//   console.log(`${this.name} ${this.lastName}`);
// }
// getName.call(UI)


// for(let item of users){
//   // console.log(item);
// // getName.call(item , 1,2)
// getName.apply(item , [1,2] )
// }


// function getName() {
//   console.log(`${this.name} `);
// }

// for(let item of users){
//   getName.call(item)
// }

// getName.call(UI)
// getName.apply(UI)
// getName.bind(UI)()
// let method = getName.bind(UI)
// method()





   


