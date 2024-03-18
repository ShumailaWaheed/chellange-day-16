// Question: 46

let laptop = {
    make:"HP",
    model:"Specture x360 15",
    year:2024,
    describe: function() {
        console.log(`this laptop ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();

// Question: 47

// Define an array of objects representing different laptops
const laptops = [
    { make: "HP", model: "Specture x360 15", year: 2024 },
    { make: "Apple", model: "MacBook Air Pro", year: 2023 },
    { make: "XPS 13", model: "Spectre x360 ", year: 2021 }
];

// Destructure the first and second laptops
const [firstLaptop, secondLaptop] = laptops;

// Log the variables
console.log(firstLaptop);
console.log(secondLaptop);

// Question: 48

// prices of two sets of laptops
const laptopPricesSet1: number[] = [1200, 1500, 1000];
const laptopPricesSet2: number[] = [1100, 1400, 1600];

const combinedPrices: number[] = [...laptopPricesSet1, ...laptopPricesSet2].sort((a, b) => a - b);

// Log the combined
console.log(combinedPrices);
