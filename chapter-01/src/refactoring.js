function find(arr, predicate) {
    for (const item of arr) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
export {};
