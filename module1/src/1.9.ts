{
    // Type Alias

    type Student = {
        name: string
        age: number
        gender: string
        contactNo?: string
        address: string
    }

    const student1: Student = {
        name: "Sadik",
        age: 50,
        gender: "male",
        contactNo: "01800000000",
        address: "ctg"
    }

    const student2: Student = {
        name: "Mir",
        age: 50,
        gender: "male",
        address: "dhk"
    }

    const student3: Student = {
        name: "Sakib",
        age: 30,
        gender: "male",
        address: "rp"
    }

    type UserName = string

    const userName: UserName = "Sadik"

    type MarriageStatus = boolean

    const marriageStatus = false

    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2

}