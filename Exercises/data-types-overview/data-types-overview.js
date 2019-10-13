// # Data types

// 1. Declare a variable on each type using two options: plain creation, creation with constructor.

let string1 = 'test string';
let string2 = new String('test string2');

let number1 = 123;
let number2 = new Number(111);

let boolean1 = true;
let boolean2 = new Boolean(false);

let varNull1 = null;
//null doesn't have constructor

let varUnderfind = undefined;
//undefined doesn't have constructor

let object1 = [1,2,3,4,5];
let object2 = new Object();

let symbol = Symbol('id');

// 2. Use operator typeof on each of them.
console.log(typeof(string1));
console.log(typeof(string2));

console.log(typeof(number1));
console.log(typeof(number2));

console.log(typeof(boolean1));
console.log(typeof(boolean2));

console.log(typeof(varNull1));
console.log(typeof(varUnderfind));

console.log(typeof(object1));
console.log(typeof(object2));
console.log(typeof(symbol));

// 3. Demonstrate object's references.

let objectData1 = [1,2,3,4];
let objectData2 = objectData1;
objectData2[0]=99;
console.log(objectData1);

// 3. Demonstrate string's backticks features.

let string3 = `This is object data: ${objectData1} `;
console.log(string3);

// # Additional
// 1. Declare an array containing different data types.

let array = [1, '1', true, null, undefined, [1], Symbol(1)];
console.log(array);

// 2. Iterate through it and collect amount of each data type to object.
let i = 0;
numberOfObjects = 0;
for (i; i< array.length; i++){
  if(typeof(array[i])=='object'){
    numberOfObjects++;
  }
}
console.log(`Amount of objects = ${numberOfObjects}`);