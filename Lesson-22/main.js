// GENERATOR FUNCTION//

// function* getData(){
//     yield 1;
//     yield 2;
// }

// const generator = getData()
// console.log(generator.next());
// for(let val of generator){
//     console.log(val);
// }
// console.log([...generator]);

////////////////////
// function* getData() {
//     let id = 0
//     while(true){
//      yield ++id
//      if(id == 3){
//         return id
//      }
//     }
// }
// const generator = getData()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// let users = [
//     {id:1 , name: 'Temurbek1' },
//     {id:2 , name: 'Temurbek2' },
//     {id:3 , name: 'Temurbek3' },
//     {id:4 , name: 'Temurbek4' },
//     {id:5 , name: 'Temurbek5' },
//     {id:6 , name: 'Temurbek6' },
//     {id:7 , name: 'Temurbek7' },
//     {id:8 , name: 'Temurbek8' },
  
// ]


/////////////////
// const onDelete = (id) => {
//     let res = users.filter((user)=> user.id !==id)
//     users = res
// }

/////////////////
// const add = (user) => {
//     users = [...users , {id:generator.next().value , name: user}]
// }

// add('Ulug1')
// onDelete(3)
// add('Ulug2')
// add('Ulug3')

// console.log(users);