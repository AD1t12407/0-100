// Create a Shape class
class Shape {
    constructor(color, name) {
      this.color = color;
      this.name = name;
    }
  
    getArea() {
      console.log("Area is not implemented.");
    }
  
    getPerimeter() {
      console.log("Perimeter is not implemented.");
    }
  }
  
  // Create a Rectangle class that extends Shape
  class Rectangle extends Shape {
    constructor(color, name, length, width) {
      super(color, name);
      this.length = length;
      this.width = width;
    }
  
    getArea() {
      return this.length * this.width;
    }
  
    getPerimeter() {
      return 2 * (this.length + this.width);
    }
  }
  
  // Create a Circle class that extends Shape
  class Circle extends Shape {
    constructor(color, name, radius) {
      super(color, name);
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Create a MathUtils class
  class MathUtils {
    static multiply(num1, num2) {
      return num1 * num2;
    }
  }
  
  // Create a Person class
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create a Student class that extends Person
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
  
    introduce() {
      super.introduce();
      console.log(`I am studying ${this.major}.`);
    }
  }
  
  // Predicted output for the following code:
  const john = new Student("John", 20, "Computer Science");
  john.introduce();
  