//import { Global } from "@jest/types";

//1. Declare a variable which will be encapsulated from global scope.
{
  let variable1;
  const variable2 = 44;
}

//console.log(variable1, variable2);

//2. Declare a variable which will appear in global object.

{
  var globalAvailable;
  variable3 = 1;
}

let g=1;
global.globalVar = 1;

console.log(globalAvailable, globalVar, g, variable3);

//3. Declare two variables which will be same-names but contain different values.

let a= 2;
console.log(a);

{
  let a = 4;
  console.log(a);
}
console.log(a);

//# Hoisting
//1. Declare a variable with hosting.

console.log(b);
var b;