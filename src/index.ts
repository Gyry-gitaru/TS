abstract class Shape {
  readonly name: string;
  readonly color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  abstract calculateArea(): number;
}

class Circle extends Shape {
  readonly radius: number;

  constructor(name: string, color: string, radius: number) {
    super(name, color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  readonly width: number;
  readonly height: number;

  constructor(name: string, color: string, width: number, height: number) {
    super(name, color);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  print(): void {
    console.log(`Area of ${this.name} = width * height`);
  }
}

class Square extends Shape {
  readonly side: number;

  constructor(name: string, color: string, side: number) {
    super(name, color);
    this.side = side;
  }

  calculateArea(): number {
    return this.side * this.side;
  }

  print(): void {
    console.log(`Area of ${this.name} = side * side`);
  }
}

class Triangle extends Shape {
  readonly base: number;
  readonly height: number;

  constructor(name: string, color: string, base: number, height: number) {
    super(name, color);
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
