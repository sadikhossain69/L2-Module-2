{
    // Generic Constrainint With Keyof Operator

    type Vehicle = {
        bike: string
        car: string
        ship: string
    }

    type Owner = "bike" | "car" | "ship" // Manually

    type Owner2 = keyof Vehicle

    const persion1: Owner2 = "car"

    const user = {
        name: "Sadik",
        age: 26,
        address: 'dhk'
    }

    const getPropertyByValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const result = getPropertyByValue(user, "name")

    // user["age"]
}