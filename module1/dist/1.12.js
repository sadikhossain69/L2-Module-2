"use strict";
{
    // Nullable Type || Unknown Type
    const searchValue = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to Search");
        }
    };
    searchValue(null);
}
