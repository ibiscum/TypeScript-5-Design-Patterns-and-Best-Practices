// With strictNullChecks: error
const maybeNumber = null;
// let value = maybeNumber * 10
// Workaround: type guard or nullish coalescing operator
let value2;
if (maybeNumber !== null) {
    value2 = maybeNumber * 10;
}
else {
    value2 = 0;
}
const value3 = maybeNumber ?? 0;
export {};
