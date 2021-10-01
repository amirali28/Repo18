// Only change code below this line
let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let uniqueArray = [];
let mySet = new Set();
for (i = 0; i <= numberArray.length; i++) {
  mySet.add(numberArray[i]);
}
for (let n of mySet) {
  uniqueArray.push(n);
}
uniqueArray.sort((a, b) => a - b);
console.log(uniqueArray);

// Only change code above this line
module.exports = { numberArray, uniqueArray };
