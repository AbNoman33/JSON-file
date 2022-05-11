const devs = [
    {
        id: 1,
        name: 'Ashraful Haque',
        age: 10,
        skill: 'IOS Developer'
    }, 
    {
        id: 2,
        name: 'Mahbub',
        age: 20,
        skill: 'Blockchain Developer'
    }, 
    {
        id: 3,
        name: 'Anisul Haque',
        age: 30,
        skill: 'PHP Developer'
    }, 
    {
        id: 4,
        name: 'Sabbir Haque',
        age: 40,
        skill: 'MERN Developer'
    } 
    
]

let data = `[{"id":1,"name":"Ashraful Haque","age":10,"skill":"IOS Developer"},{"id":2,"name":"Mahbub","age":20,"skill":"Blockchain Developer"},{"id":3,"name":"Anisul Haque","age":30,"skill":"PHP Developer"},{"id":4,"name":"Sabbir Haque","age":40,"skill":"MERN Developer"}]`

console.log(JSON.parse(data))

//console.log(JSON.stringify(devs));