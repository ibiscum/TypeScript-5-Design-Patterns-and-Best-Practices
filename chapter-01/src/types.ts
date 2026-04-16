type A = "A"
type B = "B"
type C = A | B
console.log("A" as C) // Valid
console.log("B" as C) // Valid
// console.log("C" as C) // Invalid, "C" is not assignable to type C since it is not "A" or "B"s

type User = {
  name: string
}

type ExtendedUser = User & {
  age: number
} // ExtendedUser requires both name (from User) and age

const user: ExtendedUser = {
  name: "Theo",
  age: 20,
}
console.log(user)

