//!  fetch (url , [options]) - return promise

// !what is fetch?
//? methods =>  GET , POST , PUT / PATCH , DELETE
//? status code => 200 ,201, .......
//? reponse type => .text() => .json() => .blob() => .ArrayBUffer() => .fromData()

// ! fetch with try{} => .catch()
//  ? headers => Authentication /Content type
//  ? body => JSON => .parse() / .stringify()

//! url /link /silka / endpoint
//! then / promise / async await / try catch
//! fetch(url , config)


//! 1.Manipulation fetch with => .then()
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//   return  res.json()
// })
// .then((res) => {
//     console.log(res);
//     return res
// })
// .catch((err)=> {
//     console.log(err);
// })


//! 2.Manipulation fetch with => promise
// let promise = fetch('https://jsonplaceholder.typicode.com/users')
// promise.then((res) => res.json()).then((res) => console.log(res))


//! 3.Manipulation fetch with => async/await
// const getData = async() => {
// let res = await fetch('https://jsonplaceholder.typicode.com/users')
// let data = await res.json()
// console.log(data );
// } 


// ! Practise with backend
// function getData(){
//  datalist.innerText = "Loading...";
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((res) => {
//  console.log(res)
//  datalist.innerHTML= `<h1>All Data</h1>`;
//  res.forEach(element => {
//     let div = document.createElement("div")
//     div.style.display = "block"
//     div.innerHTML = `<h2>${element.id}</h2>-<span>${element.name}</span> <button onclick="onSelect(${element.id})">select</button>`;
//     datalist.append(div) 
//  });
// })};

// async function onSelect(id){ 
// let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
// let data = await response.json()
// single.innerHTML = `<h1>Selected</h1><b>${data.name}</b>- <span>${data.phone}</span>`
// console.log(data);
// }



