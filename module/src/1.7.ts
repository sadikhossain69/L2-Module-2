{
    let poorUser: {name: string} = {
        name: "Sadik",
    }

    // Spread Operator
    // Rest Operator
    // Destructuring


    // learn spread operator
    let bros1 : string[] = ["Rahim", "Karim", "Salam", "Sifat"]

    let bros2 : string[] = ["Abir", "Rayhan", "Sabbir", "Hasan"]

    bros1.push(...bros2)

    let mentors1: {
        typescript: string
        redux: string
        dbms: string
    } = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    }

    let mentors2 : {
        prisma: string
        next: string
        cloud: string
    } = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    }

    let mentorsList = {
        ...mentors1,
        ...mentors2
    }

    // learn rest opeartor

    let greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend : string) => console.log(`Hi ${friend}`))
    }
 
    greetFriends("Abul", "Kabul", "Babul")
}