 //// CLASSES ADVANCED //

// class Webbrain {
//     age = 0
//     static year = 0
//     getYear(){
//         console.log(++Webbrain.year);
//     }
//     getAge(){
//         console.log(++this.age);
//     }
// }

// let one = new Webbrain
// let two = new Webbrain
// one.getYear()           //1   //static
// one.getYear()           //2
// two.getYear()           //3
// two.getYear()           //4
// console.log("======")
// one.getAge()            //1
// one.getAge()            //2
// two.getAge()            //1
// two.getAge()            //2


                          //STATIC CLASSES

// class Webbrain {
//     age = 0
//    static year = 0
//   static getYear(){
//         console.log(++this.year);
//     }
//     getAge(){
//         console.log(++this.age);
//     }
// }


// Webbrain.getYear()
// Webbrain.getYear()
// Webbrain.getYear()
// Webbrain.getYear()


                     //// PROTECTED CLASSES //

// class Protected {
//     _name = "webbrain";    // ===> public variable
//     #protect = 'Privicy';  // ===> privicy or protected variable
//    get getName(){
//         console.log(this.#protect);
//     }
//     set getName(val){
//          this.#protect = val
//     }
// }


// let protected = new Protected
// console.log(protected);
// console.log(protected._name);
// console.log(protected.#protect);


// protected.getName
// console.log('======');
// protected.getName = 'Not Privicy'
// protected.getName


               ////BUILT IN CLASSES //

//  class Ar extends Array{}
//  let arr = new Ar
//  console.log(arr.length);

// class Obj extends Object{}
// let object = new Obj
// console.log(object);


                         //// istanceof ///

// class arr extends Array {
// }
// let result = new arr
// let test = {}

// console.log(test instanceof Object);  // array , function object 
// console.log( result instanceof Array);


            //// MIXINS ////
     
// class Users {
//     getUser(){
//         console.log("No User");
//     }
// }

// let obj = {
//     objInfo(){
//         console.log("No Object");
//     }
// }
  
// Object.assign(Users.prototype , obj) 

// let test = new Users()
// console.log(test);



// class Animal {
//     constructor(name){
//         this.ism = name
//     }
// }

// class Rabbit extends Animal {
//     constructor(name){ 
//         super(name)   
//     }
// }

// let rabbit = new Rabbit("White Rabbit")
// console.log(rabbit.ism);

