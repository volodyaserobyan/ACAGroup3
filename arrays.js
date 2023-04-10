// const obj1 = {
//   name: "John",
//   surName: "Wick",
// };

// const obj2 = obj1;

// obj1.age = 32;

// console.log(obj2);
// console.log(obj1 === obj2);

// arr[3]

// const a = [
//   1,
//   "d",
//   { name: "Jonhn" },
//   function aaa() {
//     console.log("this is a function");
//   },
//   [1, 2],
// ];

// const nestedFunction = a[3];

// nestedFunction();
// console.log(a);

// const arr = Array.from("asdfggh");

// console.log(arr);

// console.log(Array.isArray([]));

// const a = [];

// console.log(a === []);

// const arrayOf = Array.of(7, 5);

// console.log(arrayOf);

// const arrayConstructor = new Array(7);

// console.log(arrayConstructor);

// class Array {
//     static of() {
//         ...
//     }

//     push(3) {
//         this.
//     }
// }

// const fruits = ["Apple", "Banana"];

// const fruits = new Array("Apple", "Banana", {});

// console.log(fruits);

// const arrayFromString = "a,s,d,f,g,h".split();

// console.log(arrayFromString);

// [].flat()

// const array = [4, 6, 2, 3, 54];

// console.log(array[2]);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "f", "g"];

// const newArray = [...array1, ...array2];

// // const newArray = array1.concat(array2);
// console.log(newArray);

// const arr = [1, 2];

// const arr1 = arr.map(function (item) {
//   return item + 1;
// });

// console.log(arr1, " new");
// console.log(arr, " original");

// 1. stanum e nor function vorpes argument
// 2. isk callbacky ira hertin stanum e 3 argument => element, index, henc array
// 3. verdardznum e nor array callbacki logikain hamapatasxan elementnerov

// Array.prototype.myMap = function (callback) {
//   // Write your code here
//   // this is the original array from which the map method was invoked
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   return newArray;
// };

// const arr = [1, 2];

// const arr1 = arr.myMap(function (item) {
//   return item + 1;
// });

// console.log(arr1, " new");
// console.log(arr);

// const array = [1, 2, 3, 4, 5, 6, 7];

// console.log(array.copyWithin(0, 3, 6), " res");
// console.log(array, " array");

// const array = ["a", "b", "c"];

// const iterator1 = array.entries();

// console.log(iterator1.next(), " iterator");
// console.log(iterator1.next(), " iterator");
// console.log(iterator1.next(), " iterator");

// const array = [1, 30, 39, 29, 43, 10, 13];

// const isBelowForty = array.every(function (currentValue) {
//   return currentValue < 40;
// });

// console.log(isBelowForty, " result");
// console.log(array, " array");

// const array1 = [1, 2, 3, 4];

// const a = 6;
// array1.fill(a, 2, 4);

// console.log(array1, " array1");

// function myfun(arr, val, index1, index2) {
//   let array = [...arr];
//   for (let i = index1; i < index2; i++) {
//     array[i] = val;
//   }
//   return array;
// }

// const result = myfun([1, 2, 3, 4], 0, 2, 4);
// console.log(result, " res");

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const filteredArray = words.filter(function (word) {
//   return word.length > 6;
// });

// console.log(filteredArray, " filtered array");

// Array.prototype.myMap = function (callback) {
//   // Write your code here
//   // this is the original array from which the map method was invoked
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   return newArray;
// };

// const items = [1, 2, "a", "b"];

// const numbersArray = items.filter((item) => typeof item === "number");

// console.log(numbersArray, " array");

// Array.prototype.myFilter = function (cb) {
//   const filteredArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       filteredArray.push(this[i]);
//     }
//   }
//   return filteredArray;
// };

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const filteredArray = words.myFilter(function (word) {
//   return word.length > 6;
// });

// console.log(filteredArray, " filtered array");

// let numbers = [1, 2, 3];

// function getOrdinalSuffix(i) {
//   let j = i % 10,
//     k = i % 100;

//   if (j === 1 && k !== 11) {
//     return i + "st";
//   }
//   if (j === 2 && k !== 12) {
//     return i + "nd";
//   }
//   if (j === 3 && k !== 13) {
//     return i + "rd";
//   }
//   return i + "th";
// }

// let call = 1;

// let sum = numbers.reduce(function (previousValue, currentValue, currentIndex) {
//   previousValue = previousValue + currentValue;

//   console.log(`${getOrdinalSuffix(call)} call`);
//   call++;
//   console.table({
//     previousValue,
//     currentValue,
//     currentIndex,
//     // result,
//   });
//   return previousValue;
// }, 100);

// console.log(sum, " sum");

// function customReduce(array, callback, initialValue) {
//   let accumulator = initialValue ? initialValue : array[0];
//   let i = initialValue ? 0 : 1;
//   for (i; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i], i, array);
//   }

//   return accumulator;
// }

// const totalSum = customReduce(
//   [1, 2, 3, 4],
//   function (acc, curr) {
//     return acc + curr;
//   },
//   100
// );

// console.log(totalSum, " sum");

// const array = [5, 12, 8, 130, 44];

// const found = array.find((element) => element === 12000);

// console.log(found, " finded");

// const arr1 = [0, 1, 2, [3, 4]];

// const newArray = arr1.flat(Number.POSITIVE_INFINITY).map(function (item) {
//   return item + 1;
// });

// const newArray = arr1.flatMap(function (item) {
//   return item + 1;
// });

// console.log(newArray, " arrr");

// const flattenArray = arr1.flat(Number.POSITIVE_INFINITY);

// console.log(flattenArray);

// const array = [
//   {
//     city: "Yerevan",
//     population: "1000",
//     country: "Armenia",
//     isVisited: true,
//   },
//   {
//     city: "Tbilisi",
//     population: "2000",
//     country: "Giorgia",
//     isVisited: true,
//   },
//   {
//     city: "Moscow",
//     population: "3000",
//     country: "Russia",
//     isVisited: false,
//   },
// ];

// let me = {};

// array.forEach(function (item, index) {
//   if (item.isVisited) {
//     me = {
//       ...me,
//       [item.country]: item.city,
//     };
//   } else {
//     me = {
//       ...me,
//       [item.country]: "Haven't been yet",
//     };
//   }
// });

// console.log(me, " me");

// const obj = {

// }

// const elements = ["Fire", "Air", "Water"];

// const elemtsString = elements.join(" ");

// console.log(elemtsString.split(" "));

// function a() {
//   return 5;
// }

// console.log(a() === 5);

// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// const last = plants.pop();

// console.log(last, " last");
// console.log(plants, " plants");

// const animals = ["pigs", "goats", "sheep"];

// // animals.push("cow");

// const newAnimals = [...animals, "cow"];

// console.log(newAnimals, " animals new");

// console.log(animals, " animals");

// const arr = [1, 2, 3];

// const arrayLength = arr.unshift(4, 5);

// console.log(arr);

// const array = [1, 2, 3];

// console.log(array.includes(2));

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// const slicedElements = animals.slice(1, 3);

// console.log(slicedElements, " result");
// console.log(animals, " animals");

// console.log("Hello World".slice(0, 3));

// const months = ["Jan", "March", "April", "June"];

// months.splice(1, 0, "Feb");

// console.log(months);

// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();

// console.log(months);

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort(function (a, b) {
//   return b - a;
// });
// console.log(array1);

const a = new Object({ a: 1 });

console.log(a);
