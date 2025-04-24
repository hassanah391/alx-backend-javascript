/**
 * Creates a map of grocery items with their quantities.
 *
 * @returns {Map<string, number>} - A Map where the keys are grocery item names (strings)
 * and the values are their quantities (numbers).
 */
export default function groceriesList() {
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceries;
}
