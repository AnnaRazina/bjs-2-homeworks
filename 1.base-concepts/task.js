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

  let loanBody = 0;
  loanBody = (parseInt(amount)) - (parseInt(contribution));
  let loanTime = 0;
  
  let startCreditTime = new Date();
  let andCreditTime = [date.getFullYear(), date.getMonth()];
     if ((andCreditTime[0] - startCreditTime.getFullYear()) === 0) {
        loanTime = (andCreditTime[1] + 1) - (startCreditTime.getMonth() + 1);
     } else if ((andCreditTime[0] - startCreditTime.getFullYear()) === 1) {
        loanTime = (12 - (startCreditTime.getMonth() + 1)) + (andCreditTime[1] + 1);
     } else {
        loanTime = (((andCreditTime[0] - startCreditTime.getFullYear()) - 1) * 12) + (12 - (startCreditTime.getMonth() + 1)) + (andCreditTime[1] + 1);
     }


  
  
     console.log(loanBody);
     console.log(loanTime);
     
  // код для задачи №2 писать здесь

  return totalAmount;
}
