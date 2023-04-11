                // Switch   VS  For Loop //

// Generally "Switch case" looks like "If else" , but It has some difference. Let's see that

// let data = "rain"

//  if(data === "rain") {
//     console.log("Today is rainy");
//  } else{
//     console.log("Data not found");
//  }


//  switch(data ){
//     case "rain": console.log("Today is rainy");
//     break;
//     case "snow": console.log("Today is snowy");
//     break;
//     default : console.log("Data not found");
//  }


// Note: Switch case check data only on "stict equalty" => "=== "
// switch [ === ]
// if [  > , < , >= , <= , == , === ] 

// let data = "1"

// switch (data) {
//     case 1 : console.log("1");
//     break;
//     case "1": console.log("2");
//     break;
//     default : console.log("Data not found");
// }

                  /// FOR LOOP ///

// console.log("Hello Temurbek");                   
// console.log("Hello Ulug'bek"); 

// for(beginging , direction , step)

// for(i = 0; i <12; i+=2){   you can raise number in step
//     console.log(i);
// }

//When direction [i<12] will be true  for loop continue untill false 
// when happened intinity ? when your loop "direction" return always true 
// Please be carefull from  "infinety"  loop 

// for(i = 0; i < 12; i++){  
//     console.log("hi");    
// }

// when you forget step [i++] your loop will be endless loop and
// in this case your project may be crash

// for(i=0; i <10; ){    //endless loop
//     console.log(i);
// }

//In this case you have no problem

// for(i = 0; i < 15;){ 
//     console.log(i);
//     i++
// }

// var is global therefore 
// answer: 16

// for(var i = 0; i <= 15; i++){
//     console.log(i);
// }
// console.log(i);

// let is not global therefore
// answer :  No
// for(let i = 0; i <= 15; i++){
//     console.log(i);
// }
// console.log(i);

// var sum =  6
// for( i = 1; i < 12; i++){
//     console.log(`Sum  = ${sum} + ${i} = ${sum+=i}`);
//     if(sum === 5) break 
     
// }

// result
// Sum  = 0 + 1 = 1
// Sum  = 1 + 2 = 3
// Sum  = 3 + 3 = 6
// Sum  = 6 + 4 = 10
// Sum  = 10 + 5 = 15
// Sum  = 15 + 6 = 21
// Sum  = 21 + 7 = 28
// Sum  = 28 + 8 = 36
// Sum  = 36 + 9 = 45
// Sum  = 45 + 10 = 55
// Sum  = 55 + 11 = 66


// for(i = 1; i <= 12; i++){      // result : 1  3  7  15  31  63
//     if(i ) {
//         console.log(`${i}`);
//     }
    
// }


// for (i = 1; i < 12; i++){
//   console.log(i % 2 ===0 ? `juft son , ${i}`  :"toq son");   
// }


// for(i = 1; i < 12; i++){
//     if (i % 3 === 0) {
//         break 
//     }
//     console.log(i); 
// }


       /// LABEL in FOOR LOOP ///

// for(i = 1; i < 12; i++){
//     // console.log("Outer: ",i);
//     for(j = 1; j < 4; j++){
//     console.log(j); 
//     }
     
// }

     
// Outer: for(i = 1; i < 4; i++){
//     console.log("i",i);
//     for(j = 1; j < 5; j++){
//         if(i < 3) break Outer;
//         console.log("j",j);
//     }
// }



