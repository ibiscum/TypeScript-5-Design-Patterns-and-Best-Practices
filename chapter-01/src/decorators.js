function memoize(originalMethod, _context) {
    const cache = new Map();
    if (typeof originalMethod !== "function") {
        throw new Error("Memoize decorator can only be used on functions");
    }
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
class MyClass {
    @memoize
    addNumbers(x, y) {
        console.log(`Calculating ${x} + ${y}`);
        return x + y;
    }
}
const myClass = new MyClass();
const result1 = myClass.addNumbers(2, 3);
console.log(result1); // Output: 5
const result2 = myClass.addNumbers(2, 3);
console.log(result2); // Output: 5
function log(originalMethod, context) {
    function replacementMethod(...args) {
        console.log(`Calling ${String(context.name)}`);
        return originalMethod.call(this, ...args);
    }
    return replacementMethod;
}
class Calculator {
    @log
    add(x, y) {
        return x + y;
    }
}
new Calculator().add(2, 3);
export {};
