//JSON.parse() parses a JSON string and converts it into a JavaScript object.


const users=`{"name":"anjali","age":24,"gender":"male","skills":["java","c","c++"]}`;
const user=JSON.parse(users);
console.log(user.name);
console.log(user.skills);





//JSON.stringify() converts a JavaScript object into a JSON string.

let person = {
    name: "John",
    age: 30,
    isStudent: false,
    skills: ["JavaScript", "HTML", "CSS"],
    address: {
      street: "123 Main St",
      city: "Anytown"
    }
  };
  
  let jsonString = JSON.stringify(person);
  console.log(jsonString);
  
  