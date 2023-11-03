{
    // Union Types

    type FrontendDeveloper = "Fakibaz Developer" | "Junior Developer"
    type FullStackDeveloper = "Frontend Developer" | "Backend Developer"

    type Developer = FrontendDeveloper | FullStackDeveloper

    const newDeveloper : Developer = "Frontend Developer"

    type User = {
        name: string
        email?: string
        gender: "male" | "famale"
        bloodGroup: "A+" | "B+" | "AB+" | "AB-"
    }

    const user1: User = {
        name: "Sadik",
        email: "sadikhossain433@gmail.com",
        gender: "male",
        bloodGroup: "AB-"
    }

    // Intersection Types

    type FrontendEngineer = {
        skills: string[]
        designation1: "Frontend Engineer"
    }

    type BackendEngineer = {
        skills: string[]
        designation2: "Backend Enginner"
    }

    type FullStackEnginner = FrontendEngineer & BackendEngineer

    const softwareEnginner: FullStackEnginner = {
        skills: ['Html', 'css'],
        designation1: "Frontend Engineer",
        designation2: "Backend Enginner"
    }
}