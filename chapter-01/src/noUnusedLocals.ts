function greet() {
  const name = "Alice" // Used
  // let message // Unused (error with noUnusedLocals)
  const message = "Hello, " + name + "!"
  return message
}

console.log(greet())
