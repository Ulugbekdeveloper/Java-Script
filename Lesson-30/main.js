// function onclick (){
//     console.log('onclick');
// }

// function onmousedown () {
//     console.log('onmousedown');
// }
// function onmousemove () {
//     console.log('onmousemove');
// }


// class Events {
//     handleEvent(event) {
//        switch(event.type) {
//         case'mousedown': 
//         onmousedown();
//         break;
//         case'mousemove':
//         onmousemove();
//         break;
//         case 'click':
//         onclick();
//         break;
//     }
// }
// }
// const events = new Events();

// button.addEventListener('click', events);
// button.addEventListener('mousedown', events);


// const child = (item) => {
//     item.stopImmediatePropogation();
//     alert('child');
// }

// const parent = () => {
//     alert('parent');
// }

// const grand = () => {
//     alert('grand');
// }
// let define;
// table.onclick = function (event) {
 // if (define) define.classList.remove('active');
 // define = event.target;
 // define.classList.add('active');

// ! event.target?.classList.toggle('active');
// }