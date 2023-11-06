{
    // Generic Type

    type GenericArray<T> = Array<T>

    // const rollNumber: number[] = [1, 2, 3, 4, 5]
    // const rollNumber: Array<number> = [1, 2, 3, 4, 5]
    const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5]

    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"]
    // const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"]
    const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"]

    // const boolArray: boolean[] = [true, false, true, false, true]
    // const boolArray: Array<boolean> = [true, false, true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true, false, true]

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "mezba",
            age: 100
        },
        {
            name: "jhankar",
            age: 110
        }
    ]

    // Generic Tuple

    type GenericTupple<X, Y> = [X, Y]

    const manush: GenericTupple<string, string> = ["Mr. X", "Mr. Y"]

    const userWithID: GenericTupple<number, { name: string, email: string }> = [
        123,
        {
            name: "Sadik",
            email: "a@gmail.com"
        }
    ]
}