const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
};

console.log(book.getSummary());


const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  },
  setYear: function(newYear) {
    this.year = newYear;
  }
};

book.setYear(1950);
console.log(book.getSummary());


function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.sound = function() {
    console.log(`${this.name} makes a sound.`);
  };
}

const dog = new Animal("Dog", "Mammal");
const cat = new Animal("Cat", "Mammal");

dog.sound(); 
cat.sound(); 


class User {
  #password;

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  checkPassword(password) {
    return this.#password === password;
  }
}

const user = new User();
user.setPassword("secure123");

console.log(user.checkPassword("secure123")); 
console.log(user.checkPassword("wrongPassword")); 
