type One = string
type Two = string | number
type Three = 'hello'

let e = <string | number>'hello2'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number |
    string => {
        if (c == 'add') return a + b
        return '' + a + b
}

let myVal: string = addOrConcat(2,2, 'concat') as string
let nextVal: number = addOrConcat(2,2, 'concat') as number

 

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

let userName: 'Dave' | 'Rachel' | 'John'
userName = 'Rachel'

// Functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 39))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (c: number, d: number) => number

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

const addAll = (a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) 


class Coder {
    name: string
    
}