"use strict";

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  const d = b**2 - (4*a*c);

  if (d === 0) {
    const x = (-b / (2 * a).toFixed(4));
    arr = [x];
  } else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2*a).toFixed(4); 
    const x2 = (-b - Math.sqrt(d)) / (2*a).toFixed(4);
    arr = [x1, x2];
  } else {
    arr = [];
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
