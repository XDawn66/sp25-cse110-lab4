// function sumV(num1, num2, add) {
//   if (add) {
//     const result = 0;
//     result = num1 + num2;
//     console.log(result);
//   } else {
//     return;
//   }
//   console.log("The sum is: " + result);
// }

// sumV(10, 10, true);

// function discountPrices(prices, discount) {
//   const discounted = [];
//   const length = prices.length;

//   for (let i = 0; i < length; i++) {
//     const discountedPrice = prices[i] * (1 - discount);
//     finalPrice = Math.round(discountedPrice * 100) / 100;
//     discounted.push(finalPrice);
//   }
//   return discounted;
// }
// console.log(discountPrices([100, 200, 300], 0.5));

// let student = {
//   name: "John",
//   major: "Computer Science",
//   "Grad Year": 2023,
//   greeting: function () {
//     console.log("Hello! My name is " + this.name + ".");
//   },
//   "favorite teacher": {
//     name: "Mr. Smith",
//     subject: "Math",
//   },
//   courses: "CS101",
//   courseLoad: ["CS101", "CS102", "CS103"],
// };

// let statistics = {
//   redCars: 21,
//   blueCars: 45,
//   greenCars: 12,
//   raceCars: 5,
//   blackCars: 40,
//   rareCars: 2,
// };

// for (stuff in statistics) {
//   if (statistics[stuff] % 2 == 1 || stuff[0] == "r") {
//     console.log(stuff + ": " + statistics[stuff]);
//   }
// }

// function modifyArray(array, callback) {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(callback(array[i]));
//   }
//   return newArr;
// }

// function double(num) {
//   return num * 2;
// }

// console.log(modifyArray([1, 2, 3], double)); // [2, 4, 6]

// let time = function () {
//   setInterval(function () {
//     let d = new Date();
//     console.log(d.toLocaleTimeString());
//   }, 1000);
// };
// time();

function prinitNums() {
  console.log(1);
  setTimeout(function () {
    console.log("2");
  }, 1000);
  setTimeout(function () {
    console.log("3");
  }, 0);
  console.log(4);
}
prinitNums();
