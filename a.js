class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Xin chao, toi la ${this.name}`);
    }
}

const teo = new Person('Teo Nguyen', 10);
const ti = new Person('Ti', 20);

Person.prototype.sayHi = function() {
    console.log('Hi, my name is ' + this.name);
}

teo.sayHello();
teo.sayHi();
ti.sayHi();

teo.show = function() {
    console.log(this.name);
}

teo.show();
// ti.show(); //error