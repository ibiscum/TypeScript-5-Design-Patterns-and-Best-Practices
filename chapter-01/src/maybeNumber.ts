// With strictNullChecks: error
const maybeNumber: number | null = null
// let value = maybeNumber * 10

// Workaround: type guard or nullish coalescing operator
let value2
if (maybeNumber !== null) {
  value2 = maybeNumber * 10
  console.log(value2)

} else {
  value2 = 0
  console.log(value2)
}

const value3 = maybeNumber ?? 0
console.log(value3)
