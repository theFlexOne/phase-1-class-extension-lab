class Polygon {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  get countSides() {
    return this.dimensions.length;
  }
  get perimeter() {
    return this.dimensions.reduce((sum, num) => (sum += num));
  }
}

class Triangle extends Polygon {
  constructor(dimensions) {
    super(dimensions);
  }

  get isValid() {
    const [a, b, c] = this.dimensions;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  constructor(dimensions) {
    super(dimensions);
    this.area = dimensions[0] ** 2;
  }
  get isValid() {
    const [a, b, c, d] = this.dimensions;
    return a * 4 === a + b + c + d;
  }
}