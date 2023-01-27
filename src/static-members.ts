export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Yoshi';
  static lastName: string = 'Hiro';

  static work() {
    return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());
