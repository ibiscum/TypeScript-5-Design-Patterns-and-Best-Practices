const one: string = "one"
console.log(one)

const two: boolean = false
console.log(two)

const three: number = 3
console.log(three)

const four: null = null
console.log(four)

const five: unknown = 5
console.log(five)

// const six: any = 6
// console.log(six)

const seven = Symbol("seven")
console.log(seven)

// 'never' is typically used for functions that don't return anything (void) or throw an error.
function neverReturningFunction(): never {
  throw new Error("This function never returns")
}
neverReturningFunction()

// let eight: never; // This wouldn't work as you can't assign a value to 'never'.
