// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "stubborn billy";

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    bestCustomer = "not bob";   //global variable inside a function

}

function overwriteBestCustomer () {
    bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = "stubborn bob";
}
