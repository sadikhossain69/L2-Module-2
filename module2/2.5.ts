{
    // Function With Generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray("Bangladesh")
    const resGeneric = createArrayWithGeneric<string>("Bangladesh")

    type User = {
        id: number
        name: string
    }

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: "Parshan"
    })


    const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res2 = createArrayWithGenericTuple<string, number>("Bangladesh", 2125)
    const resGeneric2 = createArrayWithGenericTuple<string, {name: string}>("Bangladesh", {name: "Sadik"})

    const addCourseToStudent = <T>(student: T) => {
        const course: string = "Next Level Web Development"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "Sadik", email: "x@gmail.com", devType: "NLWD"})
    const student2 = addCourseToStudent({name: "Rahim", email: "9@gmail.com", hasWatch: "Apple"})

}