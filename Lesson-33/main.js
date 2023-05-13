// let data = [
//     1,2,3,4,5,6,7,8,9,10,
//     11,12,13,14,15,16,17,18,19,20,
//     21,22,23,24,25,26,27,28,29,30,
//     31,32,33,34,35,36,37,38,39,40,
//     41,42,43,44,45,46,47,48,49,50,
//     51,52,53,54,55,56,57,58,59,60,
//     61,62,63,64,65,66,67,68,69,70,
//     71,72,73,74,75,76,77,78,79,80,
//     81,82,83,84,85,86,87,88,89,90,
//     91,92,93,94,95,96,97,98,99,100]  

//     let body = document.getElementsByTagName('body')[0];
//     let resetBtn = document.createElement('button')
//     resetBtn.setAttribute('id', 'reset')
//     resetBtn.innerHTML = 'Refresh'
//     body.append(resetBtn)

//     resetBtn.addEventListener('click', ()=>{
//       removeContainer()
//       createContainer()
//       addData(data)

//     })



//  function createContainer(){
//     let container = document.createElement('div');
//     container.setAttribute('id','container');
//     body.append(container)
//  }  
 
// function removeContainer(){
//     container.remove()
//  }

// function addData(numbers) {
//    numbers.forEach((element) => {  
//       let container = document.getElementById('container')
//       let button = document.createElement('button')
//       button.setAttribute('onClick',`changeData(${element})`) ;
//       button.innerHTML = element
//       container.append(button)
//    });
// }
// createContainer()
// addData(data)

// function changeData(element){
//    let cloneData = [...data];
//    cloneData.forEach((value, index)=>{
//       if(value % element === 0){
//          cloneData[index] = "*"
//       }
//    })
//    removeContainer()
//    createContainer()
//    addData(cloneData)
// }