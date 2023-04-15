      ///OBJECTS///
// let a = 1;
// function test(){
//     a = 2;
//     console.log(a);
// }
// console.log(a);
// test()

// for(let i = 0; false; i++){
//     console.log(1);
// }
// let i = 0;
// do {
// console.log(2);
// i++
// }while(false)

// while(false){
//      i++
//     console.log(3);
// }


// let obj = {};
// let constuctorObj = new Object()

// let userData = {
//     name : "Ulug'bek",
//     status:"Developer",
//     age:20,
//     "full name" : "G'uzorov  Ulug'bek",
//     222: 2003,
//     major:"Frontend, Bunker "
// }    
 
// let name = "major";
// console.log(userData[name]); 

// console.log(userData.name);           //Ulug'bek
// console.log(userData['name']);        //Ulug'bek
// console.log(userData.full name);      // ERROR
// console.log(userData['full name']);   // G'uzorov  Ulug'bek
// console.log(userData.0);              // ERROR
// console.log(userData[0]);             // 2003 
// console.log(userData['0']);           // 2003


// let family = {
//       dad : 1971,     //1970
//       mom : 1972,
//       bro : 1996,
//       bro : 1999,
//       myself: 2003    // littleBro : 1999
// }
// // family.dad = 1970;
// // family.littleBro = 1999;
// delete family.bro
// console.log(family);


                    //// OBJECT.FREEZE ///
/// After OBJECT.FREEZE method you can't change or delete  object at all

// const company = {
//    ceo: "Ulug'bek",   
//    manager : "Asadebek" ,
//    dev : "Temubek",
//    established : 2022,
//    GDP : 20000
// }
// company.established = 1999    ///before you can do anything you want 
// Object.freeze(company)      
// delete company.ceo           /// after object.FREEZE cant delete
// console.log(company);        //   after object.FREEZE can't anything

                  //// OBJECT.SEAL ///
 //after OBJECT.SEAL you can change object but can't delete  or add element               
// const company = {
//    ceo: "Ulug'bek",   
//    manager : "Asadebek" ,
//    dev : "Temubek",
//    established : 2022,
//    GDP : 20000
// }
// Object.seal(company)
// company.GDP = 12                    /// you can olny chnaged element which you had
// company.teamLead = "Abdumalik"      /// you can't add new element
// delete company.established          /// you can't delete element
// console.log(company);


// const test1 = {
//       name: "Ulug'bek",
//       status: "developer"
// }

// const test2 = {
//       name: "Ulug'bek",
//       status: "developer"
// }
// test1.birth = 2003;
// const test3 = test1

// console.log(test1);   //birth = 2003;
// console.log(test2);   // no
// console.log(test3);   //birth = 2003;

// console.log(test1 == test3);       //true
// console.log(test1 === test3);     //true

// console.log(test1 == test2);    //false
// console.log(test1 === test2);   //false

 /// STRUCTURED CLONE ///
 //you can use STRUCTUREDCLONE version of node 17 and above versions

// const test1 = {
//       name: "Ulug'bek",
//       status: "developer"
// }

// const test2 = structuredClone(test1)   
// test1.name = "CEO"
// test1.birth = 2003
// console.log(test1);   /// changed 
// console.log(test2);   // no
// console.log(test1 == test2);   /// false


//////

// let name = "CEO";
// let status = "Frontent"

// const company = {
//       name : name,
//       status : status
// }

//////
/// Agar value variable ko'rinishida keladigan bo'lsa , 
// Va ana shu variable nomi key nomi bilan bir xil busa biz ularni bitta qilib yoza olamiz.

// let name = "CEO";
// let status = "Frontent"

// // const company = {
// //       name ,
// //       status,
// // }

// ///

// const  company = { name , status}
// console.log(company);


////// IN special keyword

// const company = {
//       name : "CEO",
//       status: "Frontend"
// }

// // console.log(name in company);   ///can't use 
// console.log('name' in company);  // true
// console.log('surName' in company);  // false


  //// OBJECT.ASSIGN ///

//   const company = {
//       name : "CEO",
//       status: "Frontend"
// }

// const result = {}
// delete company.name
// company.name = "aaaa"
// Object.assign(result, company)
// console.log(company);
// console.log(result);




