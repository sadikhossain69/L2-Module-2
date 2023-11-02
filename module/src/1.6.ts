// Learning Function
// Normal Function
// Arrow Function

// normal function
function add(num1: number, num2: number = 10): number {
    return num1 + num2
}

add(2, 2)

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2

const poorUser: {
    name: string
    balance: number
    addBalance(balance: number): string
} = {
    name: "Sadik",
    balance: 0,
    addBalance(balance) {
        return `My new Balance is ${this.balance + balance}`
    }
}

const arr: number[] = [1, 2, 3, 4, 5]

const newArray: number[] = arr.map((e: number): number => e * e)