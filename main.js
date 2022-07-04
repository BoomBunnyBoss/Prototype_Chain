function Organism() {}
Organism.prototype.Alive = function () {
  return this.age < 110 ? true : false;
};

function Creature() {}
Creature.prototype = Object.create(Organism.prototype);
Creature.prototype.constructor = Creature;
Creature.prototype.Age = function () {
  return this.age;
};

function Person() {}
Person.prototype = Object.create(Creature.prototype);
Person.prototype.constructor = Person;
Person.prototype.Hi = function () {
  return `Hello, ${this.name}`;
};

function Boy(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Boy.prototype = Object.create(Person.prototype);
Boy.prototype.constructor = Boy;
Boy.prototype.Color = function () {
  return this.color;
};

function Girl(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Girl.prototype = Object.create(Person.prototype);
Girl.prototype.constructor = Girl;
Girl.prototype.Color = function () {
  return this.color;
};

const john = new Boy("John", 33, "Blue");
console.log(john.Age()); 
console.log(john.Hi()); 
console.log(john.Alive()); 
console.log(john.Color()); 

const anna = new Girl("Anna", 120, "Red");

console.log(anna.Age());
console.log(anna.Hi());
console.log(anna.Alive());
console.log(anna.Color());