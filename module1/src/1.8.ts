{
    // Destructuring 

    // Object Destructuring
    interface User {
        id: number
        name: {
            firstName: string
            middleName: string
            lastName: string
        }
        contactNo: string
        address: string
    }

    const user: User = {
        id: 200,
        name: {
            firstName: "Sadik",
            middleName: "Hossain",
            lastName: "Khan"
        },
        contactNo: "01800000000",
        address: "Uganda"
    }

    const {
        contactNo,
        name: { middleName }
    } = user

    // Array Destructuring

    const myFriends: string[] = ["Sadik", "Sabbir", "Rakib", "Hasan", "Mizan", "Sumon"]

    const [,, bestFriend, ...rest] = myFriends
}