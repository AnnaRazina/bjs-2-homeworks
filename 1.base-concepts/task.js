"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2)-(4*a*c);
  let root
  if (d<0) {
    arr = [];
  } else if (d===0) {
    root = -b/(2*a);
    arr.push(root);
  } else if (d>0) {
      root = (-b + Math.sqrt(d) )/(2*a);
      arr.push(root);
      root = (-b - Math.sqrt(d) )/(2*a);
      arr.push(root);
  } else {
    arr = [];
  }
  
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
