class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Square extends Shape {
    sideLength;
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
        this.sideLength = sideLength;
    }
    getArea() {
        return this.sideLength * this.sideLength;
    }
}
export {};
