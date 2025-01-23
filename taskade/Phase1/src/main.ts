type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string;
    active: boolean;
    albums: (string | number)[]
}

type UserId = stringOrNumber 

// Literal types
let myName = "Tee"

let userName: 'Dave' | 'Rachel' |'John'
userName = 'Rachel'

// Functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2,39))

let subtract = function (c: number, d: number): number {
    return c - d
}

let subtracts = (e: number, f: number): number => {
    return e - f
}