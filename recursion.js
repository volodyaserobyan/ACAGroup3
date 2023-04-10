// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// const factorial = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };

// console.log(factorial(5));

// fibonaci
// 1 1 2 3 5 8 13 21

// const fibonaci = (num) => {
//   if (num < 2) {
//     return num;
//   }

//   return fibonaci(num - 1) + fibonaci(num - 2);
// };

// console.log(fibonaci(7));

// [].flat

// [3,[4,2,[1], 9], 10]

// [3, 4, 2, 1, 9, 10]

// function recursiveFlat(arr) {
//   const result = [];
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       result.push(...recursiveFlat(element));
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// }

// console.log(recursiveFlat([3, [4, 2, [1, [8]], 9], 10]));

// const gcd = (a, b) => {
//   if (!b) {
//     return a;
//   }
//   return gcd(b, a % b);
// };

// const result = gcd(458, 2154);
// console.log(result);

//gcd(458, 322)
//gcd(322, 136)
//gcd(136, 50)
//gcd(50, 36)
//gcd(36, 14)
//gcd(14, 8)
//gcd(8, 6)
//gcd(6, 2)
//gcd(2, 0)
// 2

// O(n)
// O(2n) = 2O(n) = O(n)
// O(1) = 0

// const linearSearch = (list, value) => {
//   for (let i = 0; i < list.length; i++) {
//     if (value === list[i]) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(linearSearch([2, 1, 4, 2, 56, 2, 1, 43, 1, 2, 4, 6, 8, 6, 7], 7));

// 1 2 3 4 5 6 7 8 9 10 100 1000 100000 1000000

// function binarySearch(sortedArray, value) {
//   let start = 0;
//   let end = sortedArray.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//     if (sortedArray[middle] === value) {
//       return middle;
//     } else if (sortedArray[middle] < value) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }
//   return -1;
// }

// const element = binarySearch([4, 15, 18, 23, 27], 23);
// //23
// console.log(element);

// [2, 3, 1, 9, 4];

// [2, 1, 3, 4, 9];

// [1, 2, 3, 4, 9];

// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort([2, 3, 1, 9, 9, 9, 2, 4]));
