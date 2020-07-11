//get the total score of force users only.

let personnel = [
  {
    id: 5,
    name: 'Luke Skywalker',
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: 'Sabine Wren',
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: 'Zeb Orellios',
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: 'Ezra Bridger',
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: 'Caleb Dume',
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const finalResult = personnel
  .filter((person) => person.isForceUser)
  .map((score) => score.pilotingScore + score.shootingScore)
  .reduce((acc, current) => acc + current);
console.log(finalResult);

const items = [
  { name: 'Bike', price: 100 },
  { name: 'Bike', price: 100 },
  { name: 'Car', price: 120 },
  { name: 'TV', price: 300 },
  { name: 'Book', price: 10 },
  { name: 'Computer', price: 120 },
  { name: 'Computer', price: 110 },
];

//Old way
for (let i = 0; i < items.length; i++) {
  //console.log('Items', items[i]);
}

/* items.forEach((item) => {
  if (item.price > 100) {
    console.log(item);
  }
}); */

const itemFound = items.find((item) => item.price > 100);

console.log(itemFound);

const itemFoundFilter = items.filter((item) => item.price > 100);

console.log(itemFoundFilter);

const mapFound = items.map((item, index) => {
  return { name: `Testing ${index}`, value: item.price };
});

console.log(mapFound);
const someItem = items.some((item) => item.price < 100);
console.log(someItem);

const everyItem = items.every((item) => item.price < 100);
console.log(everyItem);

const num = [2, 2, 1, -1, 0, 3];
let sum = num.reduce((accumulator, current) => {
  return accumulator + current;
});

console.log(sum);

let map = new Map();
map.set('workshop', 'JS');
map.set('who', 'Tester');

let keyValues = map.keys();
console.log(map.entries());

let set = new Set();

let tester = { name: 'Tester' };
let tester1 = { name: 'Tester' };
let dev = { name: 'Developer' };

set.add(tester).add(dev).has(dev);
console.log(set);

let user = {
  name: 'Jonny',
  age: 22,
};

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

let { name, ...rest } = user;
console.log(name);
console.log(rest);

function showMenu(options = { name: 'Sai', age: 'Unknown' }) {
  console.log('----', options.name, options.age);
}

showMenu(user);
