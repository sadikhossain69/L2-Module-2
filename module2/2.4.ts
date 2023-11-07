{
    // Interface Generic

    interface Developer<T, X = null> {
        name: string
        computer: {
            brand: string
            model: string
            releaseYear: number
        }
        smartWatch: T
        bike?: X
    }

    type EmilabType = {
        brand: string
        model: string
        display: string
    }

    const poorDeveloper: Developer<EmilabType> = {
        name: "Sadik",
        computer: {
            brand: "Asus",
            model: "X-2",
            releaseYear: 2012
        },
        smartWatch: {
            brand: "Emilab",
            model: "kn44",
            display: "OLED"
        }
    }

    interface AppleWatch {
        brand: string
        model: string
        heartTrack: boolean
        sleepTrack: boolean
    }

    interface YamahaBike {
        model: string
        engineCapacity: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "Sadik",
        computer: {
            brand: "Dell",
            model: "X-2655645",
            releaseYear: 2023
        },
        smartWatch: {
            brand: "Emildsab",
            model: "kn4sf4",
            heartTrack: true,
            sleepTrack: true
        }
    }
}