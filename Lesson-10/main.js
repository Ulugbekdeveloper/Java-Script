// console.log([] + '0');  //string


// let arr = [ 1,2,3,4,5];
// console.log([1,2,3,4].join('+'));
// console.log(eval([1,2,3,4].join("+")));  //10

//FILTER METHODS //

//filter ===> method looks like forEach but return item which you want 
// let num = [1,20 , 10 ,8 ,15, 30];
// let str = ['apple', 'orange', 'banana' , 'kiwi']
// let res = num.filter((val ,index)=>{
//     return  val < 10
//  })
// console.log(res);

// let str = ['apple', 'orange', 'banana' , 'kiwi']
// let res = str.filter(function(val , inx){
//    return  val.length <= 5
// })
// console.log(res);

// let obj = [
//     {id:2 ,year:'2001', name:"Abdumalik"},
//     {id:1 ,year:'2005', name:"Temurbek"},
//     {id:3 ,year:'2003', name:"dev"},
//     {id:4 ,year:'2008', name:"IOS"},
//     {id:5 ,year:'2005', name:"Frond"},
//     {id:6 ,year:'2009', name:"Back"},
// ]
// let res = obj.filter((val , inx)=>val.year <= 2005)
// console.log(res);


/// SORT MOTHOD ///

// let  sort = [4,11,32,2,5];
// let res = sort.sort((a,b)=>a-b)
// console.log(res);

// let str = ['Apple', 'range', 'banana' , 'kiwi']
// let res = str.sort((a,b)=> a.localeCompare(b))
// console.log(res);


//Find Method //

// find only one element 
// let obj = [
//     {id:2 ,year:'2001', name:"Abdumalik"},
//     {id:1 ,year:'2005', name:"Temurbek"},
//     {id:3 ,year:'2003', name:"dev"},
//     {id:4 ,year:'2008', name:"IOS"},
//     {id:5 ,year:'2005', name:"Frond"},
//     {id:6 ,year:'2009', name:"Back"},
// ]
// let res = obj.find((val)=>val.id === 5)
// console.log(res);


//FindIndex Method //

// find only one  index of element 
// let obj = [
//     {id:2 ,year:'2001', name:"Abdumalik"},
//     {id:1 ,year:'2005', name:"Temurbek"},
//     {id:3 ,year:'2003', name:"dev"},
//     {id:4 ,year:'2008', name:"IOS"},
//     {id:5 ,year:'2005', name:"Frond"},
//     {id:6 ,year:'2009', name:"Back"},
// ]
// let res = obj.findIndex((val)=>val.id === 5)
// console.log(res);

//copyWithIn method ///

//  let a =[1,2,3,4,5,6,7]
//0 indexdan boshlab quy 3-indexdan 6-indexgacha bo'lgan ma'lumotni 
// console.log(a.copyWithin(0, 4,6));
 
//reduce method //  // reduce(callback , initialvalue)
// reduce ==> birinchi qiymati ya'ni sum callback nimaga return qilsa shunga teng hozir bu yerda 5 ga teng 
// 
// let res = a.reduce((sum , current, index)=> {
    // console.log( ` ${index} - ${sum}   = ${  index -sum }`);
    // return  - sum - index   //-21
    //  return index - sum   //3

    // console.log( ` ${current} - ${index}   = ${  current -index }`);
    // return current - index

//     console.log( ` ${current} - ${index}   = ${sum =  current -index }`);
//     //  return sum = current - index
    
// },0)
// console.log(res);


//FLAT METHOD // 

//  let num = [1,3,4,5,6,7,8,9,8 ,7]
// // console.log(arr[3][0]);
// console.log(res);
//  console.log(res.flat(3)); 
// console.log(new Set(res));

// let res = num.filter((value , index , array)=> array.indexOf(value) === index)
// console.log(res);


// console.log(new Map([['a' ,1] ,['b' ,2]]).keys);
// let obj = {a:1 , b: 2}
// console.log(Object.entries(obj));

