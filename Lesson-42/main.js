// let server = [
//     {id:1 , name: "Webbrain 1"},
//     {id:2 , name: "Webbrain 2"},
//     {id:3 , name: "Webbrain 3"},
//     {id:4 , name: "Webbrain 4"},
//     {id:5 , name: "Webbrain 5"}
// ]
//!SessionStorage
// let users = JSON.parse(sessionStorage.getItem("user")) || server
// const getData = () => {
//     users.forEach((user)=>{
//         let div = document.createElement("div")
//         div.innerHTML = `${user.name}`
//         div.addEventListener("click" , ()=> {
//             let res = users.filter((val)=> val.id !== user.id)
//             list.innerHTML = null
//             users = res 
//             sessionStorage.setItem("user" , JSON.stringify(res))
//             getData()
//         })
     
//         list.append(div)
//     })
// }

// getData()
//! LocalStorage
// let users = JSON.parse(localStorage.getItem("user")) || server
// const getData = () => {
//     users.forEach((user)=>{
//         let div = document.createElement("div")
//         div.innerHTML = `${user.name}`
//         div.addEventListener("click" , ()=> {
//             let res = users.filter((val)=> val.id !== user.id)
//             list.innerHTML = null
//             users = res 
//             localStorage.setItem("user" , JSON.stringify(res))
//             getData()
//         })
     
//         list.append(div)
//     })
// }

// getData()