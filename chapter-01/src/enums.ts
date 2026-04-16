enum Direction {
  Up = 0,
  Down, // Implicitly assigned 1
  Left, // Implicitly assigned 2
  Right, // Implicitly assigned 3
}

const userDirection: Direction = Direction.Up
console.log(userDirection) // Output: 0

enum Permission {
  Read = "read",
  Write = "write",
  Delete = "delete",
}

function grantPermission(permission: Permission) {

  // ... handle permission
  console.log(`Granted permission: ${permission}`)
}

grantPermission(Permission.Read)

enum Color {
  Red,
  Green,
  Blue,
}

const myColor: Color = Color.Red
console.log(myColor) // Output: 0
// myColor = "orange"
