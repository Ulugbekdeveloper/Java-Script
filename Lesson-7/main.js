// let obj = {
//     first(){
//         console.log(1);
//     },
//     second: function(){
//         console.log(2);
//     },
//     third : ()=>{
//         console.log(3);
//     }
// }
// obj.first()
// obj.second()
// obj.third()

                                  ///// NUMBERS///////

//Underscore//
// console.log(100_000_000_000); //100000000000
// console.log(100_000_000_000 +1); //100000000001
// console.log(100_000_000_000 - 1); //99999999999

// console.log('1_000_000' + 1); // 1_000_0001 str
// console.log(+'1_000_000' + 1); // NaN 


//E usage
// console.log(1e5);   // 100000
// console.log(2e5);   // 200000
// console.log(1e10);  //10000000000   
// console.log(2e10);  //20000000000
// console.log(1e200);  // 1e+200
// console.log(1e500);  //Infinity

// console.log(0.1 + 0.2);           //0.30000000000000004
// console.log(0.1 + 0.2 === 0.3);   //false
// console.log(0.2 +0.3 === 0.5);    //true

//toFixed//

// console.log(Number(0.1 + 0.2).toFixed(1));  // 0.3 str
// console.log(Number(0.1 + 0.2).toFixed(2));  // 0.30 str
// console.log(+Number(0.1 + 0.2).toFixed(3));  // 0.300 number
 
//Converting other data types to NUMBER//

// let test = '0.1 + 0.2'
// console.log(parseFloat(test));     //0.1
// console.log(parseInt(test));       //0
// console.log(+test);               //  NaN
// console.log(Number(test));        //   NaN


// let test1 = '1' 
// console.log(parseInt(test1));     //1
// console.log(parseFloat(test1));   //1
// console.log(+(test1));            //1      
// console.log(Number(test1));       //1

// let test2 = '0.3'                   
// console.log(parseInt(test2));       // 0
// console.log(parseFloat(test2));     // 0.3
// console.log(+(test2));              // 0.3
// console.log(Number(test2));         // 0.3


//Eval method //

// let test3 = '0.1 + 0.5'     + , -  , * , / , etc No problem

// console.log(eval(test3));               //0.6
// console.log(parseFloat(test3));         // 0.1
// console.log(parseInt(test3));           // 0
// console.log(Number(test3));             //NaN
// console.log(+test3);                    //NaN


// let  test4 = " 0.5 - 0.1"

// console.log(eval(test4));               //0.4
// console.log(parseFloat(test4));         // 0.5
// console.log(parseInt(test4));           // 0
// console.log(Number(test4));             //NaN
// console.log(+test4);                    //NaN



/// BINARY ///

//  let test5 = 5;

// console.log(test5.toString(2));     // 101  => binary
// console.log(parseInt('101' , 2));   // 5  => number 

// let test5 = 55

// console.log(test5.toString(16));    //37 => binary
// console.log(parseInt('37' ,4));    //55 => number

// let test5 = 9.7 
// console.log(test5.toString(2)); //1001.101100110011001100110011001100110011001100110011 => binary
// console.log(parseInt('1001.101100110011001100110011001100110011001100110011' ,2));   9 => number


//isNaN 

// console.log(isNaN(2));      // false this is not NaN
// console.log(isNaN('zz'));      //true this is NaN


//toPrecision

// let test6 = 5.123456
// console.log(test6.toPrecision(1)); // 5
// console.log(test6.toPrecision(2)); // 5.1     
// console.log(test6.toPrecision(3)); // 5.12
// console.log(test6.toPrecision(4)); // 5.123
// console.log(test6.toPrecision(5)); // 5.1235
// console.log(test6.toPrecision(6)); // 5.123456


// let test6 = 0.123456
// 0 =>  at the begining "zero" ignored in this case  ,but not at middle
// console.log(test6.toPrecision(1)); // 0.1
// console.log(test6.toPrecision(2)); // 0.12     
// console.log(test6.toPrecision(3)); // 0.123
// console.log(test6.toPrecision(4)); // 0.1235
// console.log(test6.toPrecision(5)); // 0.12346
// console.log(test6.toPrecision(6)); // 0.123456


// console.log(9_999_999_999_999_999);  // 10000000000000000



                // Math methods//

// console.log(Math.PI);   //3.141592653589793  

//  Math.abs => is absolute item of number this means it return always number
// console.log(Math.abs(-10));    // 10    num 
// console.log(Math.abs('-10'));  // 10  str
// console.log(Math.abs(-99));    // 99  num
// console.log(Math.abs(99));     // 99  num

//Math.round => 5 and 5 more like (n => 5)

// console.log(Math.round(4.4));   //4
// console.log(Math.round(4.5));   //5
// console.log(Math.round(4.6));   //5
// console.log(Math.round(4));     //4

//Math.floor => cut only number itself

// console.log(Math.floor(4.4));   //4
// console.log(Math.floor(4.5));   //4
// console.log(Math.floor(4.6));   //4
// console.log(Math.floor(4));     //4

//Math.ceil => 1...9 => above 

// console.log(Math.ceil(4.4));   //5
// console.log(Math.ceil(4.5));   //5
// console.log(Math.ceil(4.6));   //5
// console.log(Math.ceil(4));     //4

// Math.trunc => looks like floor but some diffrent in + musbat sonlatda muammo yuq ammo manfiy sonlarda bor

// console.log(Math.trunc(4.4));   //4
// console.log(Math.trunc(4.5));   //4
// console.log(Math.trunc(4.6));   //4
// console.log(Math.trunc(4));     //4


// console.log(Math.floor(-4.4));   //-5
// console.log(Math.floor(-4.5));   //-5
// console.log(Math.floor(-4.6));   //-5
// console.log(Math.floor(-4));     //-4

// console.log(Math.trunc(-4.4));   //-4
// console.log(Math.trunc(-4.5));   //-4
// console.log(Math.trunc(-4.6));   //-4
// console.log(Math.trunc(-4));     //-4


// Math.random => tasodifiy number
// console.log(parseInt(Math.random()* 100000000000 ));

//Math.max => get maximum number 
// console.log(Math.max(1,2,3,4,5,6,7,8));  //8

//Math.max => get minimum number 
// console.log(Math.min(1,2,3,4,5,6,7,8)); // 1

// Math.sqrt => ildiz osti kvadrad  
// console.log(Math.sqrt(9)); // 3

// Math.cbrt => ildiz osti kub 
// console.log(Math.cbrt(27));   // 3


//Math.pow => sonni darajaga kutaradi like this (**)
// console.log(Math.pow(2,2));  //4
// console.log(Math.pow(2,3));  //8
// console.log(Math.pow(2,4));  //16
// console.log(Math.pow(5,2));  //25
// console.log(Math.pow(5,3));  //125
// console.log(Math.pow(5,4));  //625

// console.log(5**4);           //625

// Math.sign => sonning qiymatiga qarab 1 , -1 , 0 qaytaradi

// console.log(Math.sign(1));       //1
// console.log(Math.sign(0));       //0
// console.log(Math.sign(-1));      //-1
// console.log(Math.sign(-0));      // -0 
// console.log(Math.sign('12'));    // 1
// console.log(Math.sign('-13'));   // -1
// console.log(Math.sign(1e3));   // 1


//optional chaining

// let obj = {name: "Ulug'bek" ,child:null}

// console.log(obj.child.age);   //Error
// console.log(obj.child?.age);  // undifined


