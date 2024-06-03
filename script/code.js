let numbers = [5, 10, 15, 20, 25];
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Sum of the numbers", sumArray(numbers));
