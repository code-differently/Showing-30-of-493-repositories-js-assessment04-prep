const addEvensSubtractOdds = require("../../addEvensSubtractOdds");
let numbers = process.argv.slice(2).map(Number);
console.log(addEvensSubtractOdds(numbers));