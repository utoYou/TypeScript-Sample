export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Jon', 23);
console.log(me);
