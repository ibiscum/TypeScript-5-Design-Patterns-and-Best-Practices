var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const userDirection = Direction.Up;
var Permission;
(function (Permission) {
    Permission["Read"] = "read";
    Permission["Write"] = "write";
    Permission["Delete"] = "delete";
})(Permission || (Permission = {}));
function grantPermission(permission) {
    // ... handle permission
}
grantPermission(Permission.Read);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const myColor = Color.Red;
export {};
// myColor = "orange"
