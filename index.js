// import default
// 1
// import sum from "./math.js"; // export default

// console.log("sum(1,2) :>> ", sum(1, 2));

//2
// import Math from "./math.js";
// console.log(Math);

// console.log("Math.sum(1,2) :>> ", Math.sum(1, 2));

//---------------------------------------
// named import
// 1
// import { sum, mult, PI } from "./math.js";
// 2
import * as Math from "./math.js";

// console.log(sum(10, 20), PI);
console.dir(Math.sum(10, 20));
