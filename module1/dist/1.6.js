"use strict";
// Learning Function
// Normal Function
// Arrow Function
// normal function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 2);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
const poorUser = {
    name: "Sadik",
    balance: 0,
    addBalance(balance) {
        return `My new Balance is ${this.balance + balance}`;
    }
};
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((e) => e * e);
