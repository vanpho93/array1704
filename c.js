const people = [
    { name: 'Teo', age: 10, height: 150 },
    { name: 'Ti', age: 15, height: 130 },
    { name: 'Tun', age: 13, height: 140 },
];

Array.prototype.myFind = function(fn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (fn(element)) return element;
    }
}

Array.prototype.myFindIndex = function(fn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (fn(element)) return index;
    }
    return -1;
}

Array.prototype.myMap = function(fn) {
    const output = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        output.push(fn(element));
    }
    return output;
}

Array.prototype.myReduce = function(fn) {
    if (this.length === 0) throw new Error('Array must have element(s)');
    if (this.length === 1) return this[0];
    let temp = fn(this[0], this[1]);
    for (let index = 2; index < this.length; index++) {
        const element = this[index];
        temp = fn(temp, element);
    }
    return temp;
}

// console.log([].myReduce((a, b) => a + b));