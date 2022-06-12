/// <reference path="module08_loans.ts"/>
var LoanScripts;
(function (LoanScripts) {
    function calculateInterestOnlyLoanPayment(loanTerms) {
        var payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanScripts.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    /*  TODO Update the calculateConventionalLoanPayment function. */
    function calculateConventionalLoanPayment(loanTerms) {
        var interest = calculateInterestRate(loanTerms.interestRate);
        var payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanScripts.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        var interest = interestRate / 1200;
        return interest;
    }
})(LoanScripts || (LoanScripts = {}));
/// <reference path="module08_loanScripts.ts"/>
/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */
/*  TODO Create a the Loans namespace. */
/*  TODO Create LoanPrograms namespace. */
/*  TODO Update the calculateInterestOnlyLoanPayment function. */
/*  TODO Add reference paths. */
/*  TODO Update the function calls. */
var interestOnlyPayment = LoanScripts.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPayment = LoanScripts.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
