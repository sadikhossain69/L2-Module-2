{
    // Type

    type User1 = {
        name: string
        age: number
    }

    const user1: User1 = {
        name: "Ashik",
        age: 10
    }

    // Interface
    interface User2 {
        name: string
        age: number
    }

    const user2: User2 = {
        name: "Sadik",
        age: 20
    }

    type UserWithRole1 = User1 & { role: string }

    const user3: UserWithRole1 = {
        name: "Sadik",
        age: 20,
        role: "Admin"
    }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const user4: UserWithRole2 = {
        name: "Sadik",
        age: 20,
        role: "Admin"
    }

    // Js --> Object, Array --> Object Function --> Object

    type Roll1 = number[]

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber: Roll2 = [1, 2, 3, 4, 5]

    type Add1 = (num1: number, num2: number) => number

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add : Add2 = (num1, num2) => {
        return num1 + num2
    }
}