// // const sum = (...args) => {
// //   return [...args].reduce((acc, num) => acc + num);
// // };

// // const callCounter = (cb) => {
// //   let count = 0;
// //   return (...args) => {
// //     console.log(`sum has been called ${(count += 1)} time`);
// //     return cb(...args);
// //   };
// // };

// // const sum1 = callCounter(sum);

// // console.log(sum1(1, 2));
// // console.log(sum1(12, 43, 2));
// // console.log(sum1(9, 7));

// // let rectangleArea = (length, width) => length * width;

// // const countParams = (fn) => {
// //   return (...params) => {
// //     if (params.length !== 2) {
// //       console.log(`Incorect count of parameters for ${fn.name}`);
// //     }
// //     return fn(...params);
// //   };
// // };

// // const requireIntegers = (fn) => {
// //   return (...params) => {
// //     params.forEach((param) => {
// //       if (!Number.isInteger(param)) {
// //         console.log(
// //           `Please provide an integer params, becaue only integer is required`
// //         );
// //       }
// //     });
// //     return fn(...params);
// //   };
// // };

// // rectangleArea = countParams(rectangleArea);
// // rectangleArea = requireIntegers(rectangleArea);
// // console.log(rectangleArea(20, 30), " true");
// // console.log(rectangleArea(20, 30, 4), " count");
// // console.log(rectangleArea(20, "gggg"), " type");

// // let requestData = async (url) => {
// //   try {
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     return data;
// //   } catch (err) {
// //     console.log(err, " err");
// //   }
// // };

// // const dataResponseTime = (fn) => {
// //   return async (url) => {
// //     console.time("fn");
// //     const data = await fn(url);
// //     console.timeEnd("fn");
// //     return data;
// //   };
// // };

// // // // ("https://jsonplaceholder.typicode.com/posts");

// // const myTestFunction = async () => {
// //   requestData = dataResponseTime(requestData);
// //   const data = requestData("https://jsonplaceholder.typicode.com/posts");
// //   console.log(data);
// // };

// // myTestFunction();

// // setTimeout(() => {
// //   console.log("1");
// // }, 0);

// // console.log("2");

// // function foo(b) {
// //   let a = 10;
// //   return a + b + 11;
// // }

// // function bar(x) {
// //   let y = 3;
// //   return foo(x * y);
// // }

// // const baz = bar(7);

// // console.log(baz);

// // function doSomething(name) {
// //   console.log("Hello, " + name);
// // }

// // function loggingDecorator(wrapped) {
// //   return function () {
// //     console.log("Starting");
// //     const result = wrapped.apply(this, [...arguments]);
// //     console.log("Finished");
// //     return result;
// //   };
// // }

// // const wrapped = loggingDecorator(doSomething);

// // wrapped(5,4,3)

// const menu = [
//   {
//     name: "orange_juice",
//     price: 900,
//     type: "drink",
//   },
//   {
//     name: "lemonade",
//     price: 400,
//     type: "drink",
//   },
//   {
//     name: "cranberry_juice",
//     price: 1000,
//     type: "drink",
//   },
//   {
//     name: "pineapple_juice",
//     price: 1200,
//     type: "drink",
//   },
//   {
//     name: "lemon_iced_tea",
//     price: 300,
//     type: "drink",
//   },
//   {
//     name: "vanilla_chai_latte",
//     price: 500,
//     type: "drink",
//   },
//   {
//     name: "hot_chocolate",
//     price: 600,
//     type: "drink",
//   },
//   {
//     name: "iced_coffee",
//     price: 200,
//     type: "drink",
//   },
//   {
//     name: "tuna_sandwich",
//     price: 2000,
//     type: "food",
//   },
//   {
//     name: "ham_cheese_sandwich",
//     price: 1300,
//     type: "food",
//   },
//   {
//     name: "bacon_egg",
//     price: 800,
//     type: "food",
//   },
//   {
//     name: "hamburger",
//     price: 1200,
//     type: "food",
//   },
//   {
//     name: "cinnamon_roll",
//     price: 1400,
//     type: "food",
//   },
// ];

// class CoffeeShop {
//   constructor() {
//     this.name = "Coffee Shop";
//     this.menu = menu;
//     this.orders = [];
//   }

//   addOrder(item) {
//     const findedElement = this.orders.find((order) => order.name === item.name);
//     if (findedElement) {
//       return this.orders;
//     }
//     return this.orders.push(item);
//   }

//   fulfillOrder() {
//     if (this.orders.length > 0) {
//       let orderName = this.orders.shift();
//       return `The ${orderName} is ready`;
//     }
//   }
//   cheapestItem() {
//     let pricelist = [];
//     this.menu.forEach(function (val) {
//       return pricelist.push(val.price);
//     });
//     let min = Math.min(...pricelist);
//     return String(
//       this.menu.filter((val) => val.price === min).map((val) => val.name)
//     );
//   }

//   drinksOnly() {
//     return this.menu
//       .filter((val) => val.type === "drink")
//       .map((val) => val.name);
//   }

//   foodOnly() {
//     return this.menu
//       .filter((val) => val.type === "food")
//       .map((val) => val.name);
//   }
// }

// let tcs = new CoffeeShop();

// tcs.addOrder({
//   name: "dfghjklkjhgf",
//   price: 6789,
//   type: "dfghjkjht",
// });

// tcs.addOrder({
//   name: "fdfdf",
//   price: 4322,
//   type: "fgdgdf",
// });

// console.log(tcs);

// // [[prototype]];

// // console.log(prototype);

// Object.setPrototypeOf({}, {});

// function getTemp() {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
//     const temp = Math.floor(Math.random() * (300 - 1 + 1) + 1);
//     console.log(delay, temp);
//     setTimeout(() => {
//       if (temp > 200) {
//         reject(`Reject: Too Hot | Delay: ${delay} | Temperature ${temp} deg`);
//       } else if (temp < 100) {
//         reject(`Reject: Too Cold | Delay: ${delay} | Temperature ${temp} deg`);
//       } else {
//         resolve(
//           `Resolve: Just Right | Delay: ${delay} | Temperature ${temp} deg`
//         );
//       }
//     }, delay);
//   });
// }

// getTemp()
//   .then((res) => {
//     console.log(res, " success case");
//   })
//   .catch((err) => {
//     console.log(err, " failed case");
//   });

// let requestData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const dataResponseTime = (fn) => {
//   return async (url) => {
//     console.time("fn");
//     const data = await fn(url);
//     console.timeEnd("fn");
//     return data;
//   };
// };

// const myTestFunction = async () => {
//   requestData = dataResponseTime(requestData);

//   const data = await requestData("https://jsonplaceholder.typicode.com/posts");
//   console.log(data);
// };

// myTestFunction();

// const promise1 = Promise.resolve(4);
// const promise2 = 42;
// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("foo");
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err, " err");
//   });

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("foo");
//   }, 3000);
// });

// Promise.allSettled([promise1, promise2]).then((res) => {
//   console.log(res);
// });
