/// CRUD ===> ADVANCED ARRAYS  ///

// CRUD meaning =====> C => Create , R => Read , U => Update , D => Delete

let students = [
    {id: 1, year: 2004, name:"Frontend"},
    {id: 2, year: 2006, name:"Backend"},
    {id: 3, year: 2003, name:"IOS"},
    {id: 4, year: 2002, name:"Derector"},
    {id: 5, year: 2009, name:"PM"},
    {id: 6, year: 2006, name:"Architect"},
    {id: 7, year: 2007, name:"Team lead"},
    {id: 8, year: 2005, name:"Mobile"},
    {id: 9, year: 2008, name:"PHP"},
]

//1. R =>Read 

// Sorting for numbers
// const sortByYear = () => {
//     let res = students.sort((a,b) => b.year - a.year)
//     students = res
//      console.log(res);
// }
// sortByYear()


// Sorting for strings ==> localCompare
// const sortByAlphabet = () => {
//     let res = students.sort((a,b) => a.name.localeCompare(b.name))
//     students = res
//      console.log(res);
// }
// sortByAlphabet()



// 2. D ====>  Delete 

// const deleteUser = (userId) => {
//     let res = students.filter((value) => value.id !== userId)
//     students = res
//     console.log(res);
// } 
// deleteUser(5)


// 3. C ==> Create ==> adding new data

// const addUser = (user) =>{
// students = [...students, { id:students.length + 1 , ...user}]
// }
// addUser({name:"Webbrain", year: 2022, })
// console.log(students);


// 4. U ====> Update 

// const updateUser = (data) => {
// let res = students.map((value)=> value.id === data.id ? {...value , [data.type]:data.value} : value)
// students = res
// console.log(res);
// }
// updateUser({id: 2, type:'name' , value: "Ulug'bek" })
// updateUser({id: 2, type:'year' , value: 1999 })


// const getFilterByName =(test)=>{
//     let res = students.filter((val)=> val.name.toLowerCase().includes(test.toLowerCase()))
//     console.log(res);
// }

// getFilterByName("Frontend")


// const getFilterById =(test)=>{
//     let res = students.filter((val)=> val.id === test)
//     console.log(res);
// }

// getFilterById(3)


const getFilter =({key , value})=>{
    let res = students.filter((user)=> `${user[key]}`.includes(`${value}`))
   students = res
    console.log(students);
}

getFilter({ key: 'id', value: 4 })
// getFilter({ key: 'name', value: "Frontend" })




     



