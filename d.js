const numbers = [1, 4, 6, 2, 3, 7, 9, 8, 100];

const people = [
    { name: 'Teo', age: 10, height: 150 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 140 },
];

console.log(numbers.sort((a, b) => a - b));
console.log(people.sort((a, b) => a.age - b.age));
console.log(people.sort((a, b) => a.height - b.height));
console.log(people.sort((a, b) => a.name.localeCompare(b.name)));
// console.log(numbers);
