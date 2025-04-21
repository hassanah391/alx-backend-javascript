export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string') {
      this._brand = brand;
    } else {
      return new Error('Brand must be a string');
    }

    if (typeof motor === 'string') {
      this._motor = motor;
    } else {
      return new Error('Motor must be a string');
    }

    if (typeof color === 'string') {
      this._color = color;
    } else {
      return new Error('Color must be a string');
    }
  }

  get color() {
    return this._color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Constructor = this.constructor[Symbol.species];
    return new Constructor(this._brand, this._motor, this._color);
  }
}
