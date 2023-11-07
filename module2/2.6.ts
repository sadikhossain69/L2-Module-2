{
    // Constrains

    const addCourseToStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course: string = "Next Level Web Development"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ id: 205, name: "Sadik", email: "x@gmail.com", devType: "NLWD" })
    const student2 = addCourseToStudent({ id: 100, name: "Rahim", email: "9@gmail.com", hasWatch: "Apple" })

    const student3 = addCourseToStudent({ id: 444, name: "Samad", email: "x@gmail.com", enmi: 'emni' })
}