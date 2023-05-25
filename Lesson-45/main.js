// // ! indexedDB => success, fail, version
// let request = window.indexedDB.open("webbrain", 19)

// var db = null;
// //! onsuccess
// request.onsuccess = (event) => {
//     console.log("Successfully creted",event );
//     db = request.result;
//     drawData()
// };
// //! onerror
// request.onerror = (event) => {
//     console.log("Failed", event);
//     db = request.result;
// };
// //! onupgradeneeded
// request.onupgradeneeded = (event) => {
//     console.log("Upgrated" ,event);
//     db = request.result;
// if(!db.objectStoreNames.contains("frontend")){
//     let store = db.createObjectStore("frontend", {keyPath:"id"})
//     store.onsuccess = () => {
//         console.log("store created");
//     }
//     store.onerror = () => {
//         console.log("store Failed");
//     }
// }
// }
// //! CRUD => get / getAll
// const drawData = () => {
// list.innerHTML = null;
// let tr = db.transaction("frontend" , "readonly")
// let users = tr.objectStore("frontend")

// let data = users.getAll()
// data.onsuccess = () => {
//     data.result.forEach((usr)=>{
//         let div = document.createElement("div")
//         div.innerHTML = `${usr.id}-${usr.name}<button onclick="delet(${usr.id})">Delete</button>`
//         list.append(div)
//     })
// }
// }
// //! CRUD => Add
// var i = 0
// create.onclick = () => {
//     i++;
//  let user = {
//     id : i ,
//     name: firstname.value,
//     surname: surname.value,
//     age: age.value,
//  }
//  let transaction = db.transaction("frontend" , "readwrite")
//  let users = transaction.objectStore("frontend")
//  let addEvent = users.add(user)
//  addEvent.onsuccess = () => {
//     console.log("User Created succesfully");
//     firstname.value = ""
//     surname.value = ""
//     age.value = ""
//     drawData()
//  }

// }
// //! CRUD => delete
// const delet = (id)=>{
//   let tr = db.transaction("frontend" , "readwrite")
//   let info = tr.objectStore("frontend")
//   let del = info.delete(id)
//   del.onsuccess = () => {
//     console.log("User deleted ");
//     drawData()
//   }
// }
// //! CRUD => put / Update
// update.onclick = () =>{
// let tr = db.transaction("frontend" , "readwrite")
// let user = tr.objectStore("frontend")
// let update = user.put({
//     id: 3,
//     name: firstname.value
// })
// update.onsuccess = () => {
//     drawData()
//     firstname.value = ""
// }
// }
