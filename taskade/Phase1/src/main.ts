let stringArr = ['one', 'two', 'Tee']

let guitars = ['strat', 'paolo', 3829]

let mixedData = ['EVH', 2945, true];

stringArr[0] = 'John';
stringArr.push('rock')

 guitars[0] = 1984;
 guitars.unshift('Jim')

let tests = []
let bands: string[] = []
bands.push('Van Halen')

// objects
let myObj: object
myObj = []
console.log(typeof myObj);
myObj = {}

const exampleObj = {
    prop1: 'value1',
    prop2: true,
}

exampleObj.prop1 = 'John'

// annotate a type

type Guitarist = {
    name: string;
    active: boolean;
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'WIll',
    active: false,
    albums: [1928, 5512, 'yezy01']
}

let JP: Guitarist = {
    name: 'JP',
    active: true,
    albums: ['yezy01', '1928', 5512]
}

evh = JP

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello $(guitarist.name)!`
} 