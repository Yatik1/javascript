/* object => constructors */

const User = new Object()  // --> this is an singleton object 
console.log(User);   // --> {} 

const users = {}

users.id="12"
users.name='Yatik'
users.isLoggedIn = false

console.log(users); // --> { id: '12', name: 'Yatik', isLoggedIn: false }

console.log(Object.keys(users)); // --> [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(users)); // --> [ '12', 'Yatik', false ]
console.log(Object.entries(users)); // --> [ [ 'id', '12' ], [ 'name', 'Yatik' ], [ 'isLoggedIn', false ] ]
console.log(Object.entries(users)[1]); // --> [ 'name', 'Yatik' ]

console.log(users.hasOwnProperty("name")); // --> true
console.log(users.hasOwnProperty("isLoggedIn")); // --> true
console.log(users.hasOwnProperty("fullname")); // --> false



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yatik",
            lastname: "srivastava"
        }
    }
}

console.log(regularUser);
/* 
{
  email: 'some@gmail.com',
  fullname: { userfullname: { firstname: 'yatik', lastname: 'srivastava' } }
}
 */

console.log(regularUser.fullname);  // --> { userfullname: { firstname: 'yatik', lastname: 'srivastava' } }
console.log(regularUser.fullname.userfullname); // --> { firstname: 'yatik', lastname: 'srivastava' }
console.log(regularUser.fullname.userfullname.firstname); // --> yatik

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {obj1,obj2}
console.log(obj4);  // --> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj5 = Object.assign({} , obj1,obj2,obj3)
console.log(obj5); // --> { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } : this is not a good practice

// however there is an another approach for combining various objects into one 

const obj6 = {...obj1,...obj2,...obj3}
console.log(obj6); // --> { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const Users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "w@gmail.com"
    },
    {
        id: 3,
        email: "n@gmail.com"
    },
]

console.log(Users[1]); // --> { id: 2, email: 'w@gmail.com' }
console.log(Users[1].email); // --> w@gmail.com


const student = {
    rollno:2,
    fullName : "Yatik Srivastava",
    marks: 90
}

console.log(student); // --> { rollno: 2, fullName: 'Yatik Srivastava', marks: 90 }
console.log(student.fullName);  // --> Yatik Srivastava

// const {fullName} = student   // This approach is called distructor  
// console.log(fullName); // --> Yatik Srivastava

// const {marks} = student
// console.log(marks); // --> 90

const {fullName , marks} = student
console.log(fullName,marks); // --> Yatik Srivastava 90

const {fullName : name} = student
console.log(name); // --> Yatik Srivastava

/* ++++++++++ JSON Format ---------- */

// {
//     "firstName": "yatik",
//     "surName": "srivastava",
//     "city": "Delhi"
// }
