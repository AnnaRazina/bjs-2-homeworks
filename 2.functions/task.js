// Задание 1
function getArrayParams(arr) {
  let min = 1/0; 
  let max = -1/0;
  let sum = 0;
  let avg = 0;
      for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
        } 
        if (max < arr[i]) {
          max = arr[i];
        }
        sum += arr[i];
      }
      avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
  
}

console.log(getArrayParams([-99, 99, 10]));
console.log(getArrayParams([1, 2, 3, -100, 10]));

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -1/0 || 1/0;
   for (let i = 0; i < arrOfArr.length; i++) {
      if (max < func(arrOfArr[i])) {
        max = func(arrOfArr[i]);
      }
   }
  
  return max;
}

console.log(worker([1, 2, 3])); 
console.log(worker([4, 5, 6])); 
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
console.log(makeWork(arrOfArr, worker));

console.log(worker([10, 10, 11])); 
console.log(worker([20, 10])); 
arrOfArr = [[10, 10, 11], [20, 10]];
console.log(makeWork(arrOfArr, worker)); 

console.log(worker([0, 0, 0])); 
console.log(worker([-1, -100])); 
arrOfArr = [[0, 0, 0], [-1, -100]];
console.log(makeWork(arrOfArr, worker));

// Задание 3
function worker2(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let diff = Math.abs(max - min);    
  
  return diff;
}

console.log(worker2([-10, -20, -40])); 
console.log(worker2([10, 20, 30])); 
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
console.log(makeWork(arrOfArr, worker2)); 

console.log(worker2([0, 0, 0])); 
console.log(worker2([-1, -99]));
arrOfArr = [[0, 0, 0], [-1, -99]];
console.log(makeWork(arrOfArr, worker2)); 
