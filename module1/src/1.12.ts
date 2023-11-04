{
    // Nullable Type || Unknown Type

    const searchValue = (value: string | null): void => {
        if(value) {
            console.log("Searching")
        } else {
            console.log("There is nothing to Search")
        }
    }

    searchValue(null)
}