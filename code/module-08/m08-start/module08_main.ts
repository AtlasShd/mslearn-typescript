/// <reference path="module08_loanScripts.ts"/>

/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */

/*  TODO Create a the Loans namespace. */

/*  TODO Create LoanPrograms namespace. */


/*  TODO Update the calculateInterestOnlyLoanPayment function. */

/*  TODO Add reference paths. */

/*  TODO Update the function calls. */

let interestOnlyPayment = LoanScripts.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = LoanScripts.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"
