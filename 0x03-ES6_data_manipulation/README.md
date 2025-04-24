# 0x03-ES6_data_manipulation

This project focuses on data manipulation in JavaScript using ES6 features. It includes various utility functions and examples that demonstrate working with arrays, sets, maps, typed arrays, and weak maps.

## Table of Contents

- [Description](#description)
- [Files](#files)
- [Usage](#usage)

## Description

The project contains implementations of utility functions for manipulating data structures such as arrays, sets, maps, and typed arrays. It also includes examples of how to use these functions in real-world scenarios.

## Files

### Main Files
- **`0-main.js`**: Demonstrates the `getListStudents` function.
- **`1-main.js`**: Demonstrates the `getListStudentIds` function.
- **`2-main.js`**: Demonstrates the `getStudentsByLocation` function.
- **`3-main.js`**: Demonstrates the `getStudentIdsSum` function.
- **`4-main.js`**: Demonstrates the `updateStudentGradeByCity` function.
- **`5-main.js`**: Demonstrates the `createInt8TypedArray` function.
- **`6-main.js`**: Demonstrates the `setFromArray` function.
- **`7-main.js`**: Demonstrates the `hasValuesFromArray` function.
- **`8-main.js`**: Demonstrates the `cleanSet` function.
- **`9-main.js`**: Demonstrates the `groceriesList` function.
- **`10-main.js`**: Demonstrates the `updateUniqueItems` function.
- **`100-main.js`**: Demonstrates the `queryAPI` function with a `WeakMap`.

### Utility Files
- **`0-get_list_students.js`**: Returns a list of student objects.
- **`1-get_list_student_ids.js`**: Extracts student IDs from a list of student objects.
- **`2-get_students_by_loc.js`**: Filters students by location.
- **`3-get_ids_sum.js`**: Calculates the sum of student IDs.
- **`4-update_grade_by_city.js`**: Updates student grades by city.
- **`5-typed_arrays.js`**: Creates an `Int8` typed array and sets a value at a specific position.
- **`6-set.js`**: Converts an array to a set.
- **`7-has_array_values.js`**: Checks if a set contains all values from an array.
- **`8-clean_set.js`**: Cleans a set by removing a specified prefix from its elements.
- **`9-groceries_list.js`**: Creates a map of grocery items with their quantities.
- **`10-update_uniq_items.js`**: Updates map values of `1` to `100`.
- **`100-weak.js`**: Implements a `WeakMap` to track API call counts.

### Configuration Files
- **`.eslintrc.js`**: ESLint configuration for the project.
- **`babel.config.js`**: Babel configuration for transpiling ES6 code.
- **`.gitignore`**: Specifies files and directories to ignore in version control.

## Usage

1. Clone the repository and navigate to the `0x03-ES6_data_manipulation` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the main files to see examples:
   ```bash
   npx babel-node main_files/0-main.js
   ```

