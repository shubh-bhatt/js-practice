let prompt = require("prompt-sync")();
let size = Number(prompt("Enter the size of Array: "));
let arr = new Array(size);

//1. sum of elements of array
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter the number: "));
//   sum = sum + arr[i];
// }
// console.log(sum);

// 2. Max element of an array
// let max_element = 0;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter the elements: "));
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max_element) {
//     max_element = arr[i];
//   }
// }
// console.log("Max Element is: " + max_element);

// 3. Min element of an array
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter the elements: "));
// }
// let last_index = arr.length - 1;
// let min_element = arr[last_index];
// for (let i = 0; i < arr.length; i++) {
//   if (min_element > arr[i]) {
//     min_element = arr[i];
//   }
// }
// console.log("Minimum element is: " + min_element);

// 4. Second max element in an array
// for (let i = 0; i < size; i++) {
//   arr[i] = Number(prompt());
// }

// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && arr[i] != max) {
//     sMax = arr[i];
//   }
// }
// console.log("Second Max element is: " + sMax);

// 5. Reverse an Array
// for (let i = 0; i < size; i++) {
//   arr[i] = Number(prompt());
// }

// let new_arr = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   new_arr[j] = arr[i];
//   j++;
// }
// console.log(new_arr);

// SECOND METHOD
// for (let i = 0; i < size; i++) {
//   arr[i] = Number(prompt());
// }

// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// 6. All zeros left and all ones right
// for (let i = 0; i < size; i++) {
//   arr[i] = Number(prompt());
// }

// let i = 0;
// let j = 0;

// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// 7. Array left rotatioin by 1
// for (let i = 0; i < size; i++) {
//   arr[i] = Number(prompt());
// }

// let last = arr.length - 1;
// let temp = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[last] = temp;
// console.log(arr);

// 8. Array right rotatioin by 1
// for (let i = 0; i < size; i++) {
//   arr[i] = Number(prompt());
// }
// let last = arr.length - 1
// let temp = arr[last];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = temp;
// console.log(arr);
