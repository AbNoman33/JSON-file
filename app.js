const students = [
    {
        id: 1,
        name: 'Mamun',
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
    }, 
    {
        id: 5,
        name: 'Rumana',
        age: 20,
        skill: 'Blockchain Developer'
    }, 
    {
        id: 6,
        name: 'Shorif',
        age: 25,
        skill: 'PHP Developer'
    }, 
    {
        id: 7,
        name: 'Jamal',
        age: 31,
        skill: 'Wordpress Developer'
    }, 
    {
        id: 8,
        name: 'Mina',
        age: 29,
        skill: 'IOS Developer'
    }, 
    {
        id: 9,
        name: 'Samsul',
        age: 34,
        skill: 'PHP Developer'
    }, 
    {
        id: 10,
        name: 'Kamal',
        age: 39,
        skill: 'Wordpress Developer'
    } 
    
]

console.log(JSON.stringify(students));

let teachers = `[
    {
        "id":1,
        "name":"Ashraful Haque",
        "age":10,
        "skill":"IOS Developer"
    },
    {
        "id":2,
        "name":"Mahbub",
        "age":20,
        "skill":"Blockchain Developer"
    },
    {
        "id":3,
        "name":"Anisul Haque",
        "age":30,
        "skill":"PHP Developer"
    },
    {
        "id":4,
        "name":"Sabbir Haque",
        "age":40,
        "skill":"MERN Developer"
    },
    {
        "id":5,
        "name":"Mannan Islam",
        "age":35,
        "skill":"PHP Developer"
    },
    {
        "id":6,
        "name":"Rubina Akter",
        "age":37,
        "skill":"Wordpress Developer"
    },
    {
        "id":7,
        "name":"Tajul Islam",
        "age":39,
        "skill":"PHP Developer"
    },
    {
        "id":8,
        "name":"Shoriful Islam",
        "age": 41,
        "skill":"MERN Developer"
    },
    {
        "id":9,
        "name":"Rajia Sultana",
        "age":42,
        "skill":"Blockchain Developer"
    },
    {
        "id":10,
        "name":"Sujon Uddin",
        "age": 48,
        "skill":"MERN Developer"
    }
    
    ]`

console.log(JSON.parse(teachers))

