class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
  getAge() {
    return this.age
  }
}

const person = new Person('John', 30)
person.sayHello()
const age = person.getAge()
age;
