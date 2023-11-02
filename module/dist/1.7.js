"use strict";
{
    let poorUser = {
        name: "Sadik",
    };
    // Spread Operator
    // Rest Operator
    // Destructuring
    // learn spread operator
    let bros1 = ["Rahim", "Karim", "Salam", "Sifat"];
    let bros2 = ["Abir", "Rayhan", "Sabbir", "Hasan"];
    bros1.push(...bros2);
    let mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    let mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    };
    let mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest opeartor
    let greetFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "Kabul", "Babul");
}
