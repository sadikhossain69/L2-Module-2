"use strict";
var _a, _b;
{
    // Ternary Operator || Optional Chaining || Nullish Coalecing
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    // Turnary Operator
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });
    // Nullish Coalecing Operator
    // null / undefined --> decision making
    // type IsAuthenticated = boolean | null | undefined
    const isAuthenticated = null;
    const resut1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const resut2 = isAuthenticated ? isAuthenticated : "guest";
    console.log({ resut1, resut2 });
    const user = {
        name: "Sadik",
        address: {
            city: "Faridpur",
            road: "Awesome Road",
            presentAddress: "Faridpur City"
        }
    };
    const currentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ currentAddress });
}
