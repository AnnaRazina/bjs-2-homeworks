"use strict"
// код для задачи №1
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2)-(4*a*c);
  let root;
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
  };
  
  return arr; 
};


// код для задачи №2 
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let loanBody = 0;
  loanBody = (parseInt(amount)) - (parseInt(contribution));

      function calculationLoanTime (date) {
          let loanTime = 0;
          let startCreditTime = new Date();
          let andCreditTime = [date.getFullYear(), date.getMonth()];

          if ((andCreditTime[0] - startCreditTime.getFullYear()) === 0) {
              loanTime = (andCreditTime[1] + 1) - (startCreditTime.getMonth() + 1);
          } else if ((andCreditTime[0] - startCreditTime.getFullYear()) === 1) {
              loanTime = (12 - (startCreditTime.getMonth() + 1)) + (andCreditTime[1] + 1);
          } else {
              loanTime = (((andCreditTime[0] - startCreditTime.getFullYear()) - 1) * 12) + (12 - (startCreditTime.getMonth() + 1)) + (andCreditTime[1] + 1);
          };

          return loanTime;
      };   
  let loanTimeMonths = calculationLoanTime (date);

  let P = (+(percent)) / 100 / 12;
  let MonthlyFee = loanBody * (P + (P / (((1 + P)**loanTimeMonths) - 1)));
  totalAmount = +(MonthlyFee * loanTimeMonths).toFixed(2);
 
  console.log(totalAmount);
  return totalAmount;  
};
