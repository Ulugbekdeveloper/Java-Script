                              //!SOME EXAMPLES//
// function onlick(){
//     console.log("Onclick");
// }
// function onmousedown(){
//     console.log("onmousedown");
// }
// function onmouseup(){
//     console.log('onmouseup');
// }

// button.addEventListener('click' , onlick);
// button.addEventListener('mousedown' , onmousedown);
// button.addEventListener('mouseup' , onmouseup);

// let form = document.forms.bunkerForm2.login
// console.log(form);

// let selection = select2.selectedIndex =2

// log.onkeypress = (event) => {
// if(event.target.value.includes("@")){
//     showError.innerHTML = null ;
// }else{
//     showError.innerHTML = "You forgot @ "
//     showError.style.color = 'red'
// }
// }
// console.log(form.action);

// bunkerForm.onsubmit = () => {
//     bunkerForm.method = "POST"
//     bunkerForm.action = `https://jsonplaceholder.typicode.com/todos/${bunkerForm.select1.value}`
//     console.log(bunkerForm.select1.value);
// }


                                     //!ARRAYBUFFER//

// ?ArrayBuffer  ==> new ArrayBuffer(2), new DataView(buffer), setInt8(), getInt8() fromCharCode()

// let buffer = new ArrayBuffer(2)
// let view = new DataView(buffer)

// view.setInt8(0, 104);
// view.setInt8(1, 105)

// console.log(String.fromCharCode((view.getInt8(0))));
// console.log(String.fromCharCode((view.getInt8(1))));

// ?Uint8Array and TextDecoder ==> new Uint8Array([]), new TextDecoder(), decode()

// let unit = new Uint8Array([104, 105])
// let decoder = new TextDecoder()
// let encoder = new TextEncoder()
// console.log(decoder.decode(unit)); //hi
// console.log(encoder.encode('hi')); //104, 105

// ?TextDecoder vs TextEncoder 

// let test = new  Uint8Array([104,100,35,50]);
// let decoder = new TextDecoder()
// console.log(decoder.decode(test));

// let encode = new TextEncoder()
// console.log(encode.encode("HP ENVY x360"));

 

// !Blob //
//? Usage with text
// let blob = new Blob(["hi"] , {type:"text/plain"})
// download.onclick = () => {
//      let link = document.createElement('a')
//      let url = URL.createObjectURL(blob)
//     link.href = url;
//    link.download = "Secret";
//    document.body.append(link)
//    link.click()
// }
// ? Usage with images
// download.onclick = () => {
// fetch("https://yt3.googleusercontent.com/0MxhUKXGNo28gyw5Yl5GS4CBKEOlgV-E_yoTRfBHkDaZEcf2f-SM7uEB83dIeSzl-oy9tTO6DQ=s900-c-k-c0x00ffffff-no-rj")
// .then((res) => res.blob())
// .then((res)=> {
//    let url = URL.createObjectURL(res)
//    img.src = url
// })

// }
//? usage with input , please try it
// const getFile = (e) => {
//     let url = URL.createObjectURL(e.target.files[0])
//     img.src = url
// }


// ! Attention //
// let reader = new FileReader() // no params
// const getFile = (e) => {
//     let file = e.target.files[0];
//     reader.readAsText(file)
//     reader.onload = () => {
//         console.log(reader.result);
//     }
// }

// let buffer = new ArrayBuffer(2)
// let view = new DataView(buffer)

// view.setInt8(0,104)
// view.setInt8(1,105)


// let file = new File([buffer], "Secret.txt", {type: "text/plain"})
// download.onclick = () => {
    
//     let url = URL.createObjectURL(file)
//     let link = document.createElement("a")
//     link.href = url 
//     link.download = file.name 
//     document.body.append(link)
//     link.click()

// }
