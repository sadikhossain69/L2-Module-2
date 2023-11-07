{
    // Conditional Type
    type a1 = number
    type b1 = string

    type x = a1 extends null ? true : false // conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any

    type Sheikh = {
        bike: string
        car: string
        ship: string
    }

    type CheckedVehicle<T, K> = T extends keyof K ? true : false

    type hasBike = CheckedVehicle<"car", Sheikh>
}