{
    // Ternary Operator || Optional Chaining || Nullish Coalecing

    const age: number = 18

    if (age >= 18) {
        console.log("adult")
    } else {
        console.log("not adult")
    }

    // Turnary Operator
    const isAdult: string = age >= 18 ? "adult" : "not adult"

    console.log({ isAdult })

    // Nullish Coalecing Operator
    // null / undefined --> decision making

    // type IsAuthenticated = boolean | null | undefined

    const isAuthenticated = null

    const resut1: string = isAuthenticated ?? "Guest"
    const resut2: string = isAuthenticated ? isAuthenticated : "guest"
    console.log({ resut1, resut2 })

    type User = {
        name: string
        address: {
            city: string
            road: string
            presentAddress: string
            permanentAddress?: string
        }
    }

    const user: User = {
        name: "Sadik",
        address: {
            city: "Faridpur",
            road: "Awesome Road",
            presentAddress: "Faridpur City"
        }
    }

    const currentAddress: string = user?.address?.permanentAddress ?? "No Permanent Address"

    console.log({currentAddress})

}