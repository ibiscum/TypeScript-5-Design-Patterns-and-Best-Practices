// JavaScript version without type annotations
// @ts-expect-error - This file is meant to show JavaScript code without type annotations, so we ignore TypeScript errors.
function calculateArea(length, width) {
  return length * width
}

const area = calculateArea(5, 10)
console.log(area) // Output: 50

// TypeScript version with type annotations
function calculateAreaTS(length: number, width: number): number {
  return length * width
}

const areaTS = calculateAreaTS(5, 10)
console.log(areaTS) // Output: 50

// TypeScript with type inference
function calculateAreaInference(length: number, width: number) {
  return length * width
}

const areaInference = calculateAreaInference(5, 10)
console.log(areaInference) // Output: 50
