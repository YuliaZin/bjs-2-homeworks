// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } 
    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2


function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}



// Задание 3
let arrOfArr = [];

function worker2(arr) {
  let max;
  let min;

  max = arr[0];
  min = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      } else if (arr[i] < min) {
      min = arr[i];
      }
    }
    return Math.abs(max - min);
  }

  function makeWork(arrOfArr, func) {
    let max;
    let sum = 0;
    max = func(arrOfArr[0]);
  
    for (let i = 1; i < arrOfArr.length; i++) {
      sum = func(arrOfArr[i])
      
      if (sum > max)
        max = sum;
    }
    
    return max;
  }