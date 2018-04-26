// some, every, find, findIndex, map, filter, reducer

const people = [
    { name: 'Teo', age: 10, height: 150 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 140 },
];

// Array.prototype.myEvery = function(fn) {
//     for (let index = 0; index < this.length; index++) {
//         const element = this[index];
//         if (!fn(element)) return false;
//     }
//     return true;
// }

// console.log(people.myEvery(person => person.age > 19));
// Array.prototype.mySome = function(fn) {
//     for (let index = 0; index < this.length; index++) {
//         const element = this[index];
//         if (fn(element)) return true;
//     }
//     return false;
// }

// console.log(people.filter(person => person.age > 12));
Array.prototype.myFilter = function(fn) {
    const arr = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (fn(element)) arr.push(element);
    }
    return arr;
}

console.log(people.myFilter(person => person.age > 12));
