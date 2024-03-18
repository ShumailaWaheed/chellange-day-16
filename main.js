// Question: 46
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop = {
    make: "HP",
    model: "Specture x360 15",
    year: 2024,
    describe: function () {
        console.log("this laptop ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
// Question: 47
// Define an array of objects representing different laptops
var laptops = [
    { make: "HP", model: "Specture x360 15", year: 2024 },
    { make: "Apple", model: "MacBook Air Pro", year: 2023 },
    { make: "XPS 13", model: "Spectre x360 ", year: 2021 }
];
// Destructure the first and second laptops
var firstLaptop = laptops[0], secondLaptop = laptops[1];
// Log the variables
console.log(firstLaptop);
console.log(secondLaptop);
// Question: 48
// prices of two sets of laptops
var laptopPricesSet1 = [1200, 1500, 1000];
var laptopPricesSet2 = [1100, 1400, 1600];
var combinedPrices = __spreadArray(__spreadArray([], laptopPricesSet1, true), laptopPricesSet2, true).sort(function (a, b) { return a - b; });
// Log the combined
console.log(combinedPrices);
