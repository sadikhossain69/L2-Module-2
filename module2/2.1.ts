{
    // Type Assertion
    let anything: any

    anything = "Next Level Development";

    anything = 222;
    
    // (anything as number)

    const kgToGm = (value: string | number): string | number | undefined => {
        if(typeof value === "string") {
            const convertedValue = parseFloat(value)*1000
            return `The Converted Value is : ${convertedValue}`
        }

        if(typeof value === "number") {
            return `The Converted Value is : ${value * 1000}`
        }
    }

    const result1 = kgToGm(1000) as number
    const result2 = kgToGm("1000") as string
}