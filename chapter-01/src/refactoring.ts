type Predicate<T> = (item: T) => boolean

function find<T>(arr: T[], predicate: Predicate<T>) {
  for (const item of arr) {
    if (predicate(item)) {
      return item
    }
  }

  return undefined
}
