# ES6 Promises

This project explores the use of ES6 Promises in JavaScript to handle asynchronous operations. It includes various examples and utilities to demonstrate how promises work, how to handle errors, and how to use advanced promise methods like `Promise.all`, `Promise.race`, and `Promise.allSettled`.

## Project Structure

### Files and Their Purpose

- **`0-promise.js`**: A basic example of creating a promise that does nothing.
- **`1-promise.js`**: A function that returns a promise resolving or rejecting based on a boolean input.
- **`2-then.js`**: Demonstrates chaining `.then`, `.catch`, and `.finally` methods on a promise.
- **`3-all.js`**: Uses `Promise.all` to handle multiple promises and logs the results.
- **`4-user-promise.js`**: A function that simulates signing up a user by returning a resolved promise.
- **`5-photo-reject.js`**: A function that simulates a rejected promise for a photo upload.
- **`6-final-user.js`**: Combines `signUpUser` and `uploadPhoto` using `Promise.allSettled` to handle both resolved and rejected promises.
- **`7-load_balancer.js`**: Demonstrates `Promise.race` to return the fastest resolved promise.
- **`8-try.js`**: A function that throws an error if dividing by zero, demonstrating error handling.
- **`9-try.js`**: Uses a `try-catch-finally` block to handle errors and ensure cleanup.
- **`100-await.js`**: Demonstrates the use of `async/await` for handling promises in an asynchronous function.

### Utilities

- **`utils.js`**: Contains helper functions `uploadPhoto` and `createUser` that return resolved promises.

### Configuration Files

- **`.eslintrc.js`**: ESLint configuration for linting JavaScript code.
- **`babel.config.js`**: Babel configuration for transpiling ES6+ code.
- **`.gitignore`**: Specifies files and directories to ignore in version control.

### Main Files

The `main_files` directory contains test scripts to demonstrate the functionality of the implemented modules.

## How to Run

1. Install dependencies:
   ```bash
   npm install
