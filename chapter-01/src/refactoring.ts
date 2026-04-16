type Predicate<T> = (item: T) => boolean

function find<T>(arr: T[], predicate: Predicate<T>) {
  for (const item of arr) {
    if (predicate(item)) {
      return item
    }
  }

  return undefined
}

const numbers = [1, 2, 3, 4, 5]

const found = find(numbers, (num) => num > 3)

console.log(found) // Output: 4
