//
// Object Destructuring
//

// const person = {
//   name: 'Steve',
//   age: 54,
//   location: {
//     city: 'Southampton',
//     temp: '18'
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array Destructuring
//

const address = ['1299 South Street', 'Totton', 'Dorset', 'DO19 2WZ'];

const [, city, county] = address;

console.log(`You are in ${city} ${county}.`);

const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];

const [itemName, , mediumCost, largeCost] = item;

console.log(`Medium ${itemName}: ${mediumCost}`);
console.log(`Large ${itemName}: ${largeCost}`);
