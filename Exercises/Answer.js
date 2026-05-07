// Inheritance
// Basic
//Question 1
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  describe() {
    return "I am a " + this.brand + ".";
  }
}

class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand); 
    this.doors = doors;
  }
}

const myCar = new Car("Toyota", 4); 
console.log(myCar.describe()); 
console.log(myCar.doors); 

//Question 2
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

const student = new Student("K.Kosalan", 22, "A/L");
console.log("Name: " + student.name + ", Age: " + student.age + ", Grade: " + student.grade);

//Question 3
class Animal {
  eat() {
    return "eating...";
  }
}

class Dog extends Animal {
  bark() {
    return "woof!";
  }
}

const myDog = new Dog();
console.log(myDog.eat());  
console.log(myDog.bark()); 


// Intermediate
//Question 4
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  details() {
    return "Name: " + this.name + ", Salary: " + this.salary;
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  details() {
    return super.details() + ", Department: " + this.department;
  }
}

const manager = new Manager("Hoza", 50000, "Sales");
console.log(manager.details());

//Question 5

class Engineer extends Employee {
  constructor(name, salary, specialization) {
    super(name, salary);
    this.specialization = specialization;
  }
  details() {
    return super.details() + ", Specialization: " + this.specialization;
  }
}

const engineer = new Engineer("Alice", 60000, "Software");
console.log(engineer.details());





















