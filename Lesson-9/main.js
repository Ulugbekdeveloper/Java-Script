            /// ARRAYS ///
 
//   let obj = {name: "webbrain"};
//    let arr =[1, "webbrain" , true , false , undefined , null , function test(){},]
  
// console.log(arr);       //full array
// console.log(arr[6]);    // function test(){}
// console.log(arr.length);    //7
// console.log(arr.length -1);  //6
// console.log(arr.at(2));      //true
// console.log(arr[arr.length-2]); //null


/// new Array()  vs []

// let arr1  = new Array(5)
// let arr2 = [5]

// console.log(arr1.length);  //5
// console.log(arr2.length);  //1

// let arr = [ 1,2,3,4];
// arr[5] = 5
// console.log(arr);   // [ 1, 2, 3, 4, <1 empty item>, 5 ]

/// CONVERT ARRAY TO STRING

//  let arr = [1,2,3,4,4,5]
// console.log( arr.toString());     //1,2,3,4,4,5
// console.log(typeof arr.toString());  //string

// console.log(arr.join());   //1,2,3,4,4,5
// console.log( typeof arr.join());  //string
// console.log( arr.join(""));   //123445

// console.log(typeof []);  //object
// console.log(typeof {}); //object

// console.log(Array.isArray(0)); //false
// console.log(Array.isArray([0])); //true

// let arr = []
// console.log(arr == 0);  //true

// let obj = {}
// console.log(obj == 0);  //false

// console.log([] == 0);   //true

     
          ///Loops ///

// let res = ["ali" , "vali" , "asad" , "olim"]          

//  for( let i = 0; i < res.length; i+=2){
//     console.log(res[i]);     // value
// }

// for(let key of res){    
//     console.log(key);      //value
// }

// for(let key in res){
//     console.log(res[key]);  //value
// }

// for(let key in res){
//     console.log(key);   //index
// }


     // ARRAY METHODS//

// let arr = [1,2,3,4]

// arr.push()  //add ending
// arr.pop()   // cut ending
// arr.shift() // cut beginning
// arr.unshift() add beginning
// arr.splice(0 ,2)  only cut  elements from index to index
// arr.splice(0)  //cuts , add, new elments in array
// arr.splice(2,0,"wba")

// slice return new item 
// let res = arr.slice(0,2) // only cuts  elements
// console.log(res);

// let arr = [1,2,3,4,,20]
// console.log(arr.indexOf(9));  // -1  bacause 9 not in array
// console.log(arr.indexOf(3));   // 3 has in array in 2nd data   answer is 2
// console.log(arr.indexOf(20,1)); 3- parametrdan boshlab 20 ni axtar 


/// join vs split//

//join convert array to string 

// let arr = [1,2,3,4,5,6]
// console.log(arr.join()); //1,2,3,4,5,6 
// console.log(arr.join(""));   //123456
// console.log(arr.join("? "));   //1? 2? 3? 4? 5? 6


//split convert  string to  array 

//  let arr = "1,2,3,4,5,6,7" 
// console.log(arr.split());    //[ '1,2,3,4,5,6,7' ]
// console.log(arr.split(""));  //  ['1', ',', '2', ',', '3', ',', '4', ',', '5', ',', '6', ',', '7']
// console.log(arr.split(","));     // ['1', '2', '3','4', '5', '6', '7'] 
 

// let arr = [1,2,3,4,5,6]

// console.log(arr.reverse());   //[ 6, 5, 4, 3, 2, 1 ]

// includes => return true or false  and get only one parametr
// console.log(arr.includes(2));  //true
// console.log(arr.includes(22));  //false
// console.log(arr.includes(2 ,3,4));  //false





 
 




