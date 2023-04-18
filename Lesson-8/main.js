           ///STRINGS///

// let res = "webbrain academy \ frontend"    
// console.log(res);      
// let str1 = 'webbrain'
// console.log(str1[0]);
// let str2 = new String('web')
// console.log(str1 == 'webbrain' ); true
// console.log(str2.localeCompare(str1));  // -1
// console.log(str1.localeCompare(str2));  //1



         //METHODS//

// let str1 = 'webbrain'
// charAt => dont get minus number 
// console.log(str1.charAt(1));


// let str1 = 'webbrain'
// // at => gets minus number
// console.log(str1.at(-1));


// let test = "webbrain";   //length => 8
// console.log(test.length);  // 8


// let test1 = 12345
// console.log(`${test1}`.toLowerCase());  // 12345 in str


//toLowerCase
// let toLowerCase = "WEBBRAIN"
// console.log(toLowerCase.toLowerCase());  // webbrain


// toUppercase
// let toUppercase = "webbrain"
// console.log(toUppercase.toUpperCase());  // WEBBRAIN


// indexOf => shows index of str 2nd parametr mean beginning which index
// let test = "webbrain academy"
// console.log(test.indexOf('i')); 
// console.log("i" , 5);  //find after 5th index 


// lastIndexOf
// let test = "webbrain academy"
// console.log(test.lastIndexOf("bb" ,6));


// includes => true or false 
// let test = "webbrain academy"
// console.log(test.includes('cd'));


// startsWith => checks text starts with entered item  return true or false
//  let test = "webbrain academy"
//  console.log(test.startsWith("web"));


 // endsWith => checks text ends with entered item  return true or false
//  let test = "webbrain academy"
//  console.log(test.endsWith("m"));


//padStart => starting with text  ....
//  let test = "webbrain academy"
//  console.log(test.padStart(20 ,".")); //....webbrain academy


 //padEnd => ending with text  ....
//  let test = "webbrain academy"
//  console.log(test.padEnd(25 ,"."));  //webbrain academy.........


 //slice => cuts text gets plus and minus ===> slice(start , end)  or slice(start ,-end)
//  let test = "webbrain academy"
//  console.log(test.slice(0));     //webbrain academy
//  console.log(test.slice(0 ,-5));     //webbrain ac
//  console.log(test.slice(0 ,5));     //webbr


//substring => cuts text   gets plus and  not minus  ===> substring(start , end)
//  let test = "webbrain academy"
//  console.log(test.substring(0));     //webbrain academy
//  console.log(test.substring(0 ,-5));     //space only
//  console.log(test.substring(0 ,5));     //webbr


//substr => cuts text   gets plus and  not minus  ===> substr(start , lehgth) or slice(-start ,lehgth)
//  let test = "webbrain academy"
//  console.log(test.substr(0));     //webbrain academy
//  console.log(test.substr(-9 ,9));     //n academy
//  console.log(test.substr(0 ,7));     //webbrai


//trim => cuts space  beginning and ending  only space not element 
// let test = " webbrain academy "
// console.log(test.length);  //18
// console.log(test.trim().length); // 16


//split =>changes element to array 
// let test = "webbrain"
// console.log(test.split());   //[ 'webbrain' ] 
// console.log(test.split(""));  //[ 'w', 'e', 'b', 'b','r', 'a', 'i', 'n' ]


//concat => add array  and string each other  not Numbers
// let test = "webbrain"
// let test2 = 'academy'
// console.log(test.concat(test2));   //webbrainacademy

// let test = ["webbrain"]
// let test2 = ['academy']
// console.log(test.concat(test2));  //[ 'webbrain', 'academy' ]


//valueOf =====> gets only values
//   console.log(new String("webbrain"));            //[String: 'webbrain']
//  console.log(new String("webbrain").valueOf());   //webbrain


//replace 
// let test = "webbrain academy  web"
// console.log(test.replace('Web' , "WEB")); //ignore first item must be true => webbrain academy  web
// console.log(test.replace(/Web/i, "WEB"));   //WEBbrain academy  web
// console.log(test.replace(/Web/gi, "WEB"));  //WEBbrain academy  WEB //global
// console.log(test.replace('Web' , "WEB"));   //webbrain academy  web











