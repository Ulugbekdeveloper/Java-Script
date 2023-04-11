/// While  VS   Do while ///

// let i = 3;
// while(0){
// console.log(1);

// }

// do{
//     console.log(i);
//     i--;
// } while(i == 0)



/// FUNCTIONS /// >>>> function declaration , function expression , callback function , arrow function

// let name = prompt()

// function  getAvr(name){
//     alert( ` HI ${name}`)   
// }

// getAvr(name)


/// HOISTING ///

// let id = 1 ;
// console.log(id);   // NO PROBLEM 


    // console.log(id);
    // var id  = 1       // Cannot access 'id' before initialization


    // function getAvr() {                   // NO PROBLEM 
    //     console.log("hi Ulug'bek");
    // }

    // getAvr()


    // If you call your function before initalization it works in funtion declaration 
    // because HOISTING works in  function declaration
    // Function declararion created by JS engine 
    // getAvr()                         

    // function getAvr() {                   
    //     console.log("hi Ulug'bek");
    // }

   
 /// FUNCTION EXPRESSION ///

//  let expression = function() {                   
//     console.log("HI Ulug'bek");
//  }

//  expression()      /// No problem


// expression()
//  let expression = function() {   
//     // let curry = function(){
//     //     console.log("ulu");
//     // }                
//     console.log("HI 'bek");
//  }


// expression()

// function expression () {
//     console.log("hi");
// }
// expression()
// function expression () {
//     console.log(2);
// }  
// expression()

/// Hoisting nima ?

//Hoisting bu variablellar yoki function expressionlarni  doimo fayllaring yuqorisiga olib chiqib declare qilishga aytiladi

// a()
// function a(){
//     console.log(1);
// }

// a()
// const a = function(){
//     console.log(1);
// }

// const getAvr = function(userName , surName, age){  // parametr
//     console.log(`Name: ${userName} `);
//     console.log(`Surname:${age} `);
//     console.log(`Age: ${surName} `);
//     console.log("=========");
// }
// getAvr( 20 , "f" )
// getAvr("Temurbek" ,"G'uzorov" ,27 )
// getAvr("Abdumalik" ,"G'uzorov" ,24)   // argument 


// / ARROW FUNCTION ///

// let name = "Ulug'bek"
// const test =()=> {
//     name = "G'uzorov"   
//     console.log(name);   // "G'uzorov"  this is shadow 
// };

// test()
// console.log(name);

// const telegram = (name , surName="") => {
//     // if(name  ,surName) console.log(name , surName);
//     // else console.log(name);

// //   surName && name ? console.log( surName ,name ) : console.log(name);

// // console.log(name , surName || "");

// console.log(name , surName);
// }

// telegram("Ulug'bek" )

/// Callback Function ///
// >>>> function inside another parametr of functions

/// FUNCTION WITH RETURN AND WITHOUT RETURN ///
// const gpa = "() => {}""
//  const gpa = (a = 0,b = 0,c = 0,d = 0) => {
//      let res = (a + b + c + d) /4;
//    return  res;
//  }

//  console.log(gpa(5,4,4,2));

// const getNum = (a) => {
//     let total = 189;
//     return a*100/total
// }
// console.log(parseInt(getNum(164)));


// clean code nima ?
// codni syntax jihatdan tug'ri yozish va nom berish





                      