// let title = document.querySelector('#title');

// title.addEventListener('contextmenu', () => {
//     console.log("this is context menu");
// })

// title.oncopy = () => {
//     alert("Copy is not allowed");
//     return false;
// };

//  let names = document.querySelector('#test');

// const change = (event) => {
// console.log( event.key , event.type , event.code);
// }

// let box =  document.querySelector('.box');

// box.addEventListener('mousemove', (event) => {
//     if(event.altKey && event.ctrlKey){
//       box.style.backgroundColor = `rgb(${event.y} ${event.x} ${event.y} )`
//     }
//     console.log(event.type , event.key ,event.code );
// })

// ! Scroll items

// let box =  document.querySelector('.box');

// box.addEventListener('mousemove', (event) => {
   
//    if(event.target.scrollTop + event.target.clientHeight + 50 >
//       event.target.scrollHeight){
//         box.textContent += box.textContent
//       }
//       console.log(event.target.scrollTop + event.target.clientHeight + 50 >event.target.scrollHeight)
// })

// let nav =  document.querySelector('.navbar');
// console.log(nav.style.boxShadow);

// window.addEventListener("scroll" ,(event) => {
//   if(window.scrollY >= 18){
//    nav.style.boxShadow = '19px 12px 20px 0px'
//   }else{
//     nav.style.boxShadow = null ;
//   }
// })

