// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

// 1. set(key, value): Adds a new key-value pair or updates an existing key.
// fruits.set("grapes", 400); // Adds grapes
// fruits.set("apples", 600); // Updates apples to 600

// 2. get(key): Returns the value associated with the key.
// console.log(fruits.get("bananas")); // Outputs: 300

// 3. has(key): Returns true if the key exists, otherwise false.
// console.log(fruits.has("oranges")); // Outputs: true
// console.log(fruits.has("pears")); // Outputs: false

// 4. delete(key): Removes the key-value pair associated with the key.
// fruits.delete("apples"); // Removes apples

// 5. clear(): Removes all key-value pairs from the map.
// fruits.clear(); // Now fruits is empty

// 6. size: Returns the number of key-value pairs in the map.
// console.log(fruits.size); // Outputs: 0 (after clear)

// 7. keys(): Returns an iterator of the keys in the map.
// for (let key of fruits.keys()) {
//     console.log(key);
// }

// 8. values(): Returns an iterator of the values in the map.
// for (let value of fruits.values()) {
//     console.log(value);
// }

// 9. entries(): Returns an iterator of the key-value pairs in the map.
// for (let [key, value] of fruits.entries()) {
//     console.log(`${key}: ${value}`);
// }

// 10. forEach(callback): Executes a provided function once for each key-value pair.
// fruits.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });