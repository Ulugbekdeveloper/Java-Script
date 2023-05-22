//!File download
// let buffer = new ArrayBuffer(4);
// let view = new DataView(buffer)

// view.setInt8(0,104)
// view.setInt8(1,109)
// view.setInt8(2,108)
// view.setInt8(3,103)
// let blob = new Blob([buffer], {type: "text/palin"})
// download.onclick = () => {
//     let a = document.createElement("a")
//     let url = URL.createObjectURL(blob)
//     a.href = url
//     a.download = 'info'
//     a.click()
// }
//! file download
//  download.onclick = () => {
//     fetch("https://yt3.googleusercontent.com/0MxhUKXGNo28gyw5Yl5GS4CBKEOlgV-E_yoTRfBHkDaZEcf2f-SM7uEB83dIeSzl-oy9tTO6DQ=s900-c-k-c0x00ffffff-no-rj")
//     .then((res)=> res.blob())
// .then((res)=>console.log(res))
//     .then((res)=> {
//         let url = URL.createObjectURL(res)
//         img.src = url
//     })
// }

//!file download
// download.onclick = () => {
//     let file = new File([buffer], "file.txt" , {type: "text/plain"})
//     let url = URL.createObjectURL(file)
//     let a = document.createElement("a")
//     a.href = url
//     a.download = file.name
//     document.body.append(a)
//     a.click()
// }
 

// UserData.onsubmit =(e)=> {
//     e.preventDefault()
    
//     let form = new FormData(UserData)
//     form.append("UserImage" , info.files[0])
//     form.delete("email")
// let url = URL.createObjectURL(info.files[0])
// console.log(url);
//     fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: form
//     })
//     .then((res)=> res.json())
//     .then((res)=> console.log(res))
// }
// let token = null
// UserData.onsubmit =(e)=> {
//     e.preventDefault() 
//     fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: JSON.stringify({
//             email: email.value,
//             password: password.value
//         })
//     })
//     .then((res)=> res.json())
//     .then((res)=>token = (res?.authenticationToken))
// }

// const getSingle =() =>{
//     fetch("https://httpbin.org/post" , {
//         headers:{
//             Authorization : `Bearer ${token}`
//         },
//     })
//     .then((res)=> res.json())
//     .then((res)=>{
//         res.data.forEach(element => {
//            let div = document.createElement("div") 
//            div.innerHTML = `<h1>${element.id} - ${element.name} <button >Selecteed</button></h1>`
//            category.apppend(div)
//         });
//     })
// }

// const getData =() =>{
//     fetch("https://httpbin.org/post" , {
//         headers:{
//             Authorization : `Bearer ${token}`
//         },
//     })
//     .then((res)=> res.json())
//     .then((res)=>{
//         res.data.forEach(element => {
//            let div = document.createElement("div") 
//            div.innerHTML = `<h1>${element.id} - ${element.name} <button onclick="getData()" >Selecteed</button></h1>`
//            category.apppend(div)
//         });
//     })
// }