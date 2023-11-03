"use strict";
{
    const user = {
        id: 200,
        name: {
            firstName: "Sadik",
            middleName: "Hossain",
            lastName: "Khan"
        },
        contactNo: "01800000000",
        address: "Uganda"
    };
    const { contactNo, name: { middleName } } = user;
    // Array Destructuring
    const myFriends = ["Sadik", "Sabbir", "Rakib", "Hasan", "Mizan", "Sumon"];
    const [, , bestFriend, ...rest] = myFriends;
}
