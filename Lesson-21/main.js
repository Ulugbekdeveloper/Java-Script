                                //// TRY and CATCH //

// try{
//     // console.log(number);
//  throw   new Error("Smth wenr wrong")
// }catch{
// console.log();
// }


                                  ////CALLBACK ////

// var database = {
//    Abdumalik: {
//        login:'cardinal',
//        fullName : "Abdumalik Guzorov",
//        password : 12345
//     },
//     Temurbek: {
//         login:'temurbek11',
//         fullName: " Temurbek Qodirov",
//         password : 200311
//      }
    
// }

// console.log('started...');

// const signIn = (log , pass ,callback) => {
//     setTimeout(() => {
//         if(database.Abdumalik.login === log && database.Abdumalik.password === pass){
//             return callback(`${database.Abdumalik.fullName} , Welcome to FaceBook`) 
//         }else{
//             return callback(`Your login wrong`) 
//         }   
//     }, 1000);
    
// }

// const callback =(usr) => {
//     console.log(usr);
//     console.log('finished...');
// }

//  signIn('cardinal', 12345 , callback)

// console.log('started...');

// const signIn = (log , pass ,call) => {
//     setTimeout(() => {
//         if(database.Abdumalik.login === log && database.Abdumalik.password === pass){
//             return call(`, Welcome to FaceBook` , ()=>`${database.Abdumalik.fullName}` ) 
//         }else{
//             return  call(`Your login wrong`)
//         }   
//     }, 1000);
    
// }


// signIn('cardinal', 12345 , (user , fullName)=>{    
// console.log(user);
// console.log(fullName()); 
// console.log('finished...');
// } )


                   ////PROMISE////
//  var database = {
//    Abdumalik: {
//        login:'cardinal',
//        fullName : "Abdumalik Guzorov",
//        password : 12345
//     },
//     Temurbek: {
//         login:'temurbek11',
//         fullName: " Temurbek Qodirov",
//         password : 200311
//      }
    
// }                  
// console.log('started....');

// let user = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         if(database.Abdumalik.login === 'cardinal' && database.Abdumalik.password === 2345)
//         resolve(` Welcome to FaceBook` ) 
//         else reject(`Your login wrong`)
//     }, 2000);      
// })                   
 
// user
// .then(res => console.log(res))
// .catch(error => console.log(error))
// .finally(()=> console.log('finished...'))


 ////ASYNC vs AWAIT ////

// const get = async() =>{
//     let res = await user;
//     console.log(res);
//     console.log('finished..');
    
// }
// get()


//// Promise All ///

// let all =  Promise.all([
//      new Promise((resolve, reject)=>{
//         if(database.Abdumalik.login === 'cardinal' && database.Abdumalik.password === 12345)
//         resolve(` Welcome to FaceBook` ) 
//         else reject(`Your login wrong`)   
// }), 
// new Promise((resolve, reject)=>{
//     if(database.Abdumalik.login === 'cardinal' && database.Abdumalik.password === 12345)
//     resolve(` Welcome to Insta` ) 
//     else reject(`Your login wrong`) 
// }), 
// new Promise((resolve, reject)=>{
//     if(database.Abdumalik.login === 'cardinal' && database.Abdumalik.password === 12345)
//     resolve(` Welcome to Google` ) 
//     else reject(`Your login wrong`)  
// })   
// ])

// all.then((res)=> console.log(res)).catch((err) => console.log(err))





