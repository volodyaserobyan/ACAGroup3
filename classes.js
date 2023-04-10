// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// const rectangle1 = new Rectangle(10, 10);

// console.log(rectangle1);

// const Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log(Rectangle.name);

// const Rectangle = function (height, width) {
//   this.height = height;
//   this.width = width;
// };

// Rectangle.prototype.calcArea = function () {
//   console.log(this.height * this.width);
// };

// const rec1 = new Rectangle(10, 10);

// rec1.calcArea();
// console.log(rec1);

// class Rectangle {
//   constructor(heightValue, widthvalue) {
//     this.heightProperty = heightValue;
//     this.widthProperty = widthvalue;
//   }

//   calcArea() {
//     console.log(this.height * this.width);
//   }
// }

// const rec1 = new Rectangle(10, 10);
// console.log(rec1);
// rec1.calcArea();

// console.log(rec1.hasOwnProperty("calcArea"));

// var y = "Outer y";

// class A {
//   static field = "Inner Y";

//   static {
//     var y = this.field;
//   }
// }

// console.log(y);

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   get area() {
//     return this.calcArea();
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const rec = new Rectangle(10, 10);

// console.log(rec.calcArea());

// class Samsung {
//   constructor(options) {
//     this.name = options;
//     this.surname = options;
//   }
// }
// let a = new Samsung("barev", "barlus");
// console.log(a);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   static displayName = "Point";
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// console.log(Point.distance({ x: 5, y: 6 }, { x: 8, y: 9 }));

// console.log(Point.displayName);

// class Animal {
//   speak() {
//     return this;
//   }

//   static eat() {
//     return this;
//   }
// }

// const obj = new Animal();

// console.log(obj.speak());

// const speak = obj.speak;
// console.log(speak());

// console.log(Animal.eat());
// const eat = Animal.eat;
// console.log(eat());

// function Animal() {}

// Animal.prototype.speak = function () {
//   return this;
// };

// const obj = new Animal();

// const speak = obj.speak;

// console.log(speak());

// class Rectangle {
//   #height = 0;
//   #width;

//   constructor(height, width) {
//     this.#height = height;
//     this.#width = width;
//   }

//   calcArea() {
//     return this.#height * this.#width;
//   }
// }

// const rec = new Rectangle(5, 7);

// console.log(rec.calcArea());

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a noise`);
// };

// class Dog extends Animal {
//   speak1() {
//     console.log(`${this.name} barks`);
//   }
// }

// const dog = new Dog("Rex");

// dog.speak();

const Animal = {
  speak() {
    console.log(`${this.name} makes a noise`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);

const dog1 = new Dog("Rex");
dog1.speak();
