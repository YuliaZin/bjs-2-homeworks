function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  
  result = (arr1.every((v, i) => v === arr2[i]) && (arr1.length === arr2.length));

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr
    .filter((positive) => positive > 0)
    .filter((dividedThree) => dividedThree % 3 === 0)
    .map((number) => number * 10);

  return resultArr; // array
}
