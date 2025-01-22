"use strict";
let stringArr = ['one', 'two', 'Tee'];
let guitars = ['strat', 'paolo', 3829];
let mixedData = ['EVH', 2945, true];
stringArr[0] = 'John';
stringArr.push('rock');
guitars[0] = 1984;
guitars.unshift('Jim');
let tests = [];
let bands = [];
bands.push('Van Halen');
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
const exampleObj = {
    prop1: 'value1',
    prop2: true,
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'WIll',
    active: false,
    albums: [1928, 5512, 'yezy01']
};
let JP = {
    name: 'JP',
    active: true,
    albums: ['yezy01', '1928', 5512]
};
evh = JP;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Doesn't exist!`;
};
