//// DOM -2 ////

// =====> hasAttribute => return true or false
// let parent = document.querySelector(".parent")
// console.log(parent.hasAttribute('type'));

// =====> getAttribute
// let parent = document.querySelector(".parent")
// console.log(parent.getAttribute('class'));

// =====> setAttribute
// let parent = document.querySelector(".parent")
// parent.setAttribute("id", "border")
// let parent = document.querySelector(".parent")
// parent.setAttribute("id", "border-non")

// =====> removeAttribute
// let remove = parent.removeAttribute('id')   
   
// =====> createElement => before , after , apprend , prepand
// let parent = document.querySelector(".parent")
// let div = document.createElement("div")
// let txt = document.createTextNode("Hey Node")
// div.setAttribute("id" , "border")
// div.append(txt)
// parent.prepend(div)
// div.remove()


// =====> cloneNode
// let parent = document.querySelector('.parent')
// let clone = parent.cloneNode(true)
// console.log(clone);


// =====> style 
// let parent = document.querySelector('.parent')
// let child = parent.children[0].children
// for(let i = 0; i < child.length;  i++ ){
//     if(i % 2 ===0){
//         child[i].style.color = 'red'
//     }else{
//         child[i].style.color = 'blue'
//     }
// }

// Array.from(child).forEach((el , index) => {
//     if(index % 2 ===0){
//      el.style.color = 'red'
//     }else{
//     el.style.color = 'blue'
//     }
// });

// =====> style.cssText
// let parent = document.querySelector('.parent')
// let css = parent.style.cssText = `
// color : red;
// background-color: blue
// `

// =====> offset
// let parent = document.querySelector('.parent')

// =====>offsetTop
// let offsetTop = parent.offsetTop;
// console.log(offsetTop);

// =====>offsetLeft
// let offsetLeft = parent.offsetLeft;
// console.log(offsetLeft ); 

// =====>offsetWidth
// let offsetWidth = parent.offsetWidth;
// console.log(offsetWidth );


// =====>clientWidth ==> ignore border
// let clientWidth = parent.clientWidth;
// console.log(clientWidth );


// =====>clientHeight ===> get only content 173
// let clientHeight = parent.clientHeight;
// console.log(clientHeight );

// // =====>clientWidth ===> get only content 190
// let clientWidth = parent.clientWidth;
// console.log(clientWidth );

// //  =====> scrollHeight ===> gets content with paragraph 173
// let scrollHeight = parent.scrollHeight;
// console.log(scrollHeight );


// //  =====> scrollWidth ===> gets content with paragraph 4906
// let scrollWidth = parent.scrollWidth;
// console.log(scrollWidth );


// let parent = document.querySelector('.parent')
// let btn = document.querySelector('.button')
// let button = document.querySelector('.scroll')

// function expand(){
//     if(parent.clientHeight === parent.scrollHeight){
//         parent.style.height = `150px`;
//         btn.innerHTML = "show more"
//     }else{
//         parent.style.height = `${parent.scrollHeight}px`;
//         btn.innerHTML = "show less"
//     }
// }
// =====> scroll
// function sr(){
//     parent.scroll(0, parent.scrollHeight)
// }

// =====> scrollBy
// function sr(){
//     parent.scrollBy(0, 10)
// }

// =====> scrollTo => fixed item and works only one times

// function sr() {
//     parent.scrollTo(0 ,50)
// }


// =====> getBoundingClientRect
// let parent = document.querySelector('.parent')
// console.log(parent.getBoundingClientRect());