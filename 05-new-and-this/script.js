function createUser(name, age) {
  return { name: name, age: age };
}

let user = createUser("Kyle", 23);
console.log(user);

// constructor function
function User1(name, age) {
  this.name = name;
  this.age = age;
}

let user2 = new User1("Sam", 30);
console.log(user2);

// Class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let user3 = new User("shubh", 22);
console.log(user3);
