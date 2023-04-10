// try {
//   throw new Error("Whoops");
// } catch (e) {
//   console.log(e.name + ":" + e.message);
// }

// function check(n) {
//   if (!(n >= -500 && n <= 500)) {
//     throw new RangeError("the argument must be between -500 and 500");
//   } else {
//     console.log("all is fine");
//   }
// }

// try {
//   check(2000);
// } catch (e) {
//   console.log(e.message, " error message");
//   console.log(e.name, " name");
//   console.log(e instanceof RangeError);
// }

// {
//   const undefinedVariable = "this is a undefined variable";
// }

// try {
// const a = undefinedVariable;
// } catch (e) {
//   console.log(e instanceof ReferenceError);
//   console.log(e.message);
//   console.log(e.name, " name");
//   console.log(e.fileName, " fileName");
//   console.log(e.lineNumber, " line number");
//   console.log(e.columnNumber, " column Number");
//   console.log(e.stack, " stack");
// }

// try {
//   null.f();
// } catch (e) {
//   console.log(e instanceof TypeError);
//   console.log(e.message, " message");
//   console.log(e.name, " name");
// }

// const obj = {};

// const obj1 = new Object();

// console.log(obj);
// console.log(obj1);

// const obj = {
//   a: 1,
//   b: function () {
//     console.log("hello");
//   },
// };

// const obj = {};

// // obj.a = 5;
// // obj.b = 6;

// obj["a"] = 5;
// obj["b"] = 6;

// console.log(obj.a);

// console.log(obj);

// function getDynamicallyPropertyFromObject(obj, property) {
//   return obj[property];
// }

// console.log(getDynamicallyPropertyFromObject({ a: 1 }, "a"));
// console.log(getDynamicallyPropertyFromObject({ a: 1, b: 2 }, "b"));
// console.log(obj.a, obj.b, obj["a"], obj["b"]);

// const obj = {
//   name: "John",
//   surName: "Brawn",
//   age: 32,
// };

// const returnObj = {
//   John: "name",
//   Brawn: "surName",
//   32: "age",
// };

// function objectFlip(obj) {
//   const returnObject = {};
//   Object.keys(obj).forEach((key) => {
//     returnObject[obj[key]] = key;
//   });
//   return returnObject;
// }

// console.log(objectFlip(obj));
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// const entries = Object.entries(obj);
// console.log(keys, " keys");
// console.log(values, " values");
// console.log(entries, " entries");

// fetch("....").then((res) => {
//   console.log(res);
// });

console.log("barev");
