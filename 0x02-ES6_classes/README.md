# 0x02-ES6_classes

This project explores the use of ES6 classes in JavaScript. It demonstrates how to define and use classes, inheritance, and advanced features like custom type conversion and cloning.

## Table of Contents

1. [Classes and Objects](#classes-and-objects)
2. [Inheritance](#inheritance)
3. [Custom Behaviors](#custom-behaviors)
4. [Static Methods and Properties](#static-methods-and-properties)
5. [Project Files](#project-files)

---

## Classes and Objects

The project introduces the concept of classes and objects in JavaScript. It covers how to define classes, create instances, and use getters and setters for encapsulation.

Example:
- [`0-classroom.js`](./0-classroom.js): Defines a `ClassRoom` class with a maximum student size.

---

## Inheritance

The project demonstrates how to use inheritance to extend functionality from a base class to a subclass.

Examples:
- [`5-building.js`](./5-building.js): A base class for buildings.
- [`6-sky_high.js`](./6-sky_high.js): A subclass of `Building` that adds additional properties and methods.

---

## Custom Behaviors

The project showcases how to override default behaviors in JavaScript using symbols like `Symbol.toPrimitive` and `Symbol.toStringTag`.

Examples:
- [`7-airport.js`](./7-airport.js): Overrides `Symbol.toStringTag` for custom stringification.
- [`8-hbtn_class.js`](./8-hbtn_class.js): Implements `Symbol.toPrimitive` for custom type conversion.

---

## Static Methods and Properties

Static methods and properties are used to define functionality that belongs to the class itself rather than any instance.

Example:
- [`10-car.js`](./10-car.js): Demonstrates cloning objects using a static `Symbol.species` property.

---

## Project Files

Below is a list of the main files in this project and their purposes:

| File                          | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| [`0-classroom.js`](./0-classroom.js) | Defines a `ClassRoom` class.                                                |
| [`1-make_classrooms.js`](./1-make_classrooms.js) | Initializes an array of `ClassRoom` objects.                                   |
| [`2-hbtn_course.js`](./2-hbtn_course.js) | Defines an `ALXCourse` class with validation for properties.                  |
| [`3-currency.js`](./3-currency.js) | Represents a currency with a code and name.                                   |
| [`4-pricing.js`](./4-pricing.js) | Represents pricing with an amount and currency, and includes conversion logic. |
| [`5-building.js`](./5-building.js) | A base class for buildings with square footage.                              |
| [`6-sky_high.js`](./6-sky_high.js) | A subclass of `Building` that adds floors and evacuation messages.           |
| [`7-airport.js`](./7-airport.js) | Represents an airport with a name and code, and custom stringification.       |
| [`8-hbtn_class.js`](./8-hbtn_class.js) | Represents an ALX class with custom type conversion.                        |
| [`10-car.js`](./10-car.js) | Demonstrates cloning objects using a static `Symbol.species` property. |

---

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run The main files:
   ```bash
     npx babel-node main_files/<file-name>.js
    ```

### Author
Hassan Ahmed <hassan.ahmed357753@gmail.com>

This project was completed as part of the ALX Software Engineering program.