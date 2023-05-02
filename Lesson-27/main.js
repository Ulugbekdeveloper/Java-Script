                ////DOM-1////

// window.alert("Window is general object")
// alert("Window is general object2")

// alert(window.innerHeight)
// alert(window.innerWidth)
// alert(document.title = "Maximus")
// console.log(location.href);

// console.log(window.document.location.pathname);

// let ul = document.getElementsByTagName('ul')[0]

// console.log(ul.children);
// console.log(ul.childNodes);

// console.log(ul.parentElement);
// console.log(ul.parentNode);

// console.log(ul.firstElementChild);
// console.log(ul.firstChild);

// console.log(ul.lastElementChild);
// console.log(ul.lastChild);

// console.log(ul.lastElementChild.previousElementSibling.previousElementSibling.nextElementSibling);
// console.log(ul.lastElementChild.previousSibling);


//==================>//SELECTORS//<==============//
// ====> getElementsByTagName
// let body = document.getElementsByTagName('body')[0]
// console.log(body.style.backgroundColor = 'blue');

// ====> getElementsByClassName
// let parent = document.getElementsByClassName('parent ')
// console.log(parent[0].style.background ='red' );

//====>getElementById
// let id = document.getElementById('one')
// console.log(id.style.color = 'red');


//==================>//QUERY SELECTORS//<==============//
//====>querySelector
// let qr = document.querySelector(".parent")
// console.log(qr.style.background = 'red');
// let qr = document.querySelector("#bir")
// console.log(qr);

// ====> querySelectorAll
// let qrAll = document.querySelectorAll('.parent')
// console.log(qrAll);

// ====>   innerHTML vs outerHTML vs innerText vs textContent
// let qr = document.querySelector('#id')
// qr.innerHTML = "<h1>Hello</h1>"
// qr.textContent = "<h1>Hello</h1>"
// console.log(qr.innerHTML);
// console.log(qr.textContent);
