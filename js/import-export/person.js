class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Привіт! Я ${this.name}, мені ${this.age} років.`);
    }
}