// #    /////////////////object/////////////////

                   //// Answers ////

// No1
//object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }

//answer  No1

// for(let key in obj){
//     console.log(key);
// }
             

// no2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id

//answer  No2

// for(let key in obj){
//     if(  typeof obj[key] ==  "number"){
//         console.log(key);
//     } 
// }


// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }

//NO-3 answer
// let res = {}
// for(let key in obj){
//    if(typeof obj[key] === 'boolean' ) {
//     res[key] = obj[key]
//    }
// }
// console.log(res);

// for(let key in obj){
//    if(typeof obj[key] !== 'boolean' ) {
//      delete obj[key]
//    }
// }
// console.log(obj);

// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

//  function Search(obj,str){
//   for(let key in obj){
//     let res = obj[key];
//       if(typeof  res === 'string' && res === str){
//       console.log(key, ':' ,str);
//       }
      
//   }
//  }
//  Search(obj,"WebBrain");
 
// chiqish
//     name:"WebBrain"

// N-5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// searchValue(obj,'i') => atirgul,qizil

// function searchValue(obj,strVal ){
// for(let key in obj){
//     let test = obj[key]
//  if(typeof test === 'string' &&   test === strVal){
//  console.log(strVal);  
//  }
// }
// }
// searchValue(obj,'qizil')

// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
// let sum = 0
// while(person){
// sum += person.age
// person = person.child
// }
// console.log(sum);
// chiqish
// 146

// No7
// array ichida object berilgan. job berilgan objectlarni qaytaring

// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]
// let res = []
// for(let item of arr){
//  if(!item.job){
//    res.push(item)
//  }
 
// }
// console.log(res);


// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj={
// id:1,name:'Usmon',job:'developer'
// };
// let res = {...obj}
// let res = structuredClone(obj);
// obj.id = 2;
// console.log(obj);
// console.log(res);
// console.log(obj == res);
// console.log(obj === res);


// No10
//agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//     id: 2,
//     name: 'Usmon',
//     job: 'developer',
//     practice:2
// }

// if(obj.practice > 1){
//     console.log("qabul qilindi");
// }else{
//     console.log('ming bor uzur');
// }
// chiqish
// qabul qilindi

// No11
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true
// };
// if(obj.talaba){
//     obj.credit = true; 
// }else{
//     obj.credit = false
// }
// console.log(obj);
// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }

// No12
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age:34,
//     year:1990
// }
// if(obj.age ){
//  console.log("it is Ok");   
// }else{
//     console.log('xato malumot kiritdingiz');
// }
// chiqish
// 'xato malumot kiritdingiz'


// No13
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// const  arr=['Andijon','Namangan','Qarshi','toshkent']
// function selectCity( cityList ,city){
//     let bull = true
//   for(let key of cityList){
//    if(key === city){
//     bull = false
//    }
//   }
//   if(bull){
//     console.log("topilmadi");
//   }else{
//     console.log("topildi");
//   }
// }
// selectCity( arr ,"Namanganjj" )
// No14
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'}
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz





