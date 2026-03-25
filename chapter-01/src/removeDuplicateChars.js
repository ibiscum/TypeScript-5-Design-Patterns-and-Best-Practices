function removeDuplicateChars(input) {
    const result = [];
    const seen = new Set();
    for (const c of input) {
        if (!seen.has(c)) {
            seen.add(c);
            result.push(c);
        }
    }
    return result;
}
console.log(removeDuplicateChars("aarfqwevzxcddd"));
const numbers = [];
numbers.push(1);
export {};
// TypeScript error: Argument of type '"two"' is not assignable to parameter of type 'number'.
// numbers.push("two")
