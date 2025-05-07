// Create a new Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate values are ignored

// console.log(mySet); // Output: Set { 1, 2, 3 }



// Union
const union = new Set([...setA, ...setB]);
// console.log(union); // Output: Set { 1, 2, 3, 4, 5 }

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
// console.log(intersection); // Output: Set { 3 }

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
// console.log(difference); // Output: Set { 1, 2 }

// a=>1, 2, 3, 4, 5
// b =>4, 5

// a-b => 1,2,3



// const uniqueVisitors = new Set();

// // Simulating visitor IDs
// const visitorIDs = ['user1', 'user2', 'user1', 'user3', 'user1', 'user2', 'user1', 'user3', 'user1', 'user2', 'user1', 'user3'];
// visitorIDs.forEach(id => uniqueVisitors.add(id));

// console.log(uniqueVisitors.size); // Output: 3 (unique visitors)

// const groupA = new Set(['reading', 'gaming', 'hiking']);
// const groupB = new Set(['gaming', 'cooking', 'traveling']);

// const commonInterests = new Set([...groupA].filter(interest => groupB.has(interest)));
// const intersection = new Set([...setA].filter(x => setB.has(x)));

// console.log(commonInterests); // Output: Set { 'gaming' }